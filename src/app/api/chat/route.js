import { NextResponse } from "next/server";
import siteConfig from "@/data/siteConfig";
import { PROVIDERS } from "@/lib/aiProviders";

export async function POST(request) {
  try {
    const body = await request.json();
    const provider = PROVIDERS[body?.provider];
    const model = typeof body?.model === "string" ? body.model.trim() : "";
    const userApiKey = typeof body?.apiKey === "string" ? body.apiKey.trim() : "";
    const messages = Array.isArray(body?.messages) ? body.messages.filter(isValidMessage) : [];

    if (!provider) {
      return NextResponse.json({ error: "Unsupported provider." }, { status: 400 });
    }

    if (!model) {
      return NextResponse.json({ error: "Model is required." }, { status: 400 });
    }

    if (!messages.length) {
      return NextResponse.json({ error: "Messages are required." }, { status: 400 });
    }

    const usingOwnKey = Boolean(userApiKey);
    const serverApiKey = process.env[provider.apiKeyEnvVar]?.trim() || "";

    if (!usingOwnKey && !provider.demoModeSupported) {
      return NextResponse.json(
        {
          error: `${provider.label} requires your own API key. Use your own API key in the builder menu.`,
        },
        { status: 400 }
      );
    }

    const finalApiKey = userApiKey || serverApiKey;

    if (!finalApiKey) {
      return NextResponse.json(
        {
          error: "Demo key is not available right now. Use your own API key in the builder menu.",
        },
        { status: 400 }
      );
    }

    const headers = {
      Authorization: `Bearer ${finalApiKey}`,
      "Content-Type": "application/json",
    };

    if (provider.id === "OpenRouter") {
      headers["HTTP-Referer"] = request.headers.get("origin") || siteConfig.url;
      headers["X-Title"] = `${siteConfig.name} Chatbot Builder`;
    }

    const upstreamResponse = await fetch(provider.apiBaseUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        model,
        messages,
      }),
    });

    const rawText = await upstreamResponse.text();
    let data = null;

    try {
      data = rawText ? JSON.parse(rawText) : null;
    } catch {
      data = null;
    }

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          error: buildProviderError({
            providerLabel: provider.label,
            status: upstreamResponse.status,
            usingOwnKey,
            upstreamMessage: extractUpstreamMessage(data, rawText),
          }),
        },
        { status: upstreamResponse.status }
      );
    }

    return NextResponse.json({
      reply:
        extractReply(data) ||
        "I could not generate a response just now. Please try again.",
      provider: provider.id,
      usedOwnKey: usingOwnKey,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while contacting the AI provider. Try again or add your own API key.",
      },
      { status: 500 }
    );
  }
}

function isValidMessage(message) {
  return (
    message &&
    (message.role === "system" || message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.trim()
  );
}

function buildProviderError({ providerLabel, status, usingOwnKey, upstreamMessage }) {
  if ((status === 401 || status === 403) && usingOwnKey) {
    return `Your ${providerLabel} API key was rejected. Check the key and model, then try again.`;
  }

  if ((status === 401 || status === 403) && !usingOwnKey) {
    return "Demo key is not available right now. Use your own API key in the builder menu.";
  }

  if ((status === 402 || status === 429) && !usingOwnKey) {
    return "Demo key is not available right now. Use your own API key in the builder menu.";
  }

  if (status === 402 || status === 429) {
    return `Your ${providerLabel} API key hit a billing or rate limit. ${
      upstreamMessage || "Please review the account and try again."
    }`;
  }

  if (!usingOwnKey) {
    return "The shared demo hit an upstream issue. Use your own API key in the builder menu and try again.";
  }

  if (upstreamMessage) {
    return `${providerLabel} request failed: ${upstreamMessage}`;
  }

  return `${providerLabel} request failed with status ${status}.`;
}

function extractUpstreamMessage(data, rawText) {
  const message =
    data?.error?.message ||
    data?.message ||
    (typeof rawText === "string" ? rawText : "");

  return String(message).trim().replace(/\s+/g, " ").slice(0, 240);
}

function extractReply(data) {
  const content = data?.choices?.[0]?.message?.content;

  if (typeof content === "string") {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => item?.text || item?.content || "")
      .filter(Boolean)
      .join("\n");
  }

  return "";
}
