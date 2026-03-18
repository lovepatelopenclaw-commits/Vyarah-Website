export const PROVIDERS = {
  OpenRouter: {
    id: "OpenRouter",
    label: "OpenRouter",
    apiBaseUrl: "https://openrouter.ai/api/v1/chat/completions",
    apiKeyEnvVar: "OPENROUTER_API_KEY",
    description: "Multi-model routing with flexible free and paid model options.",
    demoModeSupported: true,
    defaultModel: "nvidia/nemotron-3-super-120b-a12b:free",
    modelSuggestions: [
      "nvidia/nemotron-3-super-120b-a12b:free",
      "openai/gpt-4o-mini",
      "anthropic/claude-3.5-haiku",
    ],
  },
  OpenAI: {
    id: "OpenAI",
    label: "OpenAI",
    apiBaseUrl: "https://api.openai.com/v1/chat/completions",
    apiKeyEnvVar: "OPENAI_API_KEY",
    description: "Direct OpenAI access for GPT-style assistant experiences.",
    demoModeSupported: false,
    defaultModel: "gpt-4o-mini",
    modelSuggestions: ["gpt-4o-mini", "gpt-4.1-mini", "gpt-4.1"],
  },
  Groq: {
    id: "Groq",
    label: "Groq",
    apiBaseUrl: "https://api.groq.com/openai/v1/chat/completions",
    apiKeyEnvVar: "GROQ_API_KEY",
    description: "Fast OpenAI-compatible inference for open-weight model deployments.",
    demoModeSupported: false,
    defaultModel: "llama-3.1-8b-instant",
    modelSuggestions: ["llama-3.1-8b-instant", "openai/gpt-oss-20b"],
  },
  Together: {
    id: "Together",
    label: "Together",
    apiBaseUrl: "https://api.together.xyz/v1/chat/completions",
    apiKeyEnvVar: "TOGETHER_API_KEY",
    description: "OpenAI-compatible access to open-source chat and reasoning models.",
    demoModeSupported: false,
    defaultModel: "openai/gpt-oss-20b",
    modelSuggestions: [
      "openai/gpt-oss-20b",
      "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      "mistralai/Mixtral-8x7B-Instruct-v0.1",
    ],
  },
};

export const PROVIDER_LIST = Object.values(PROVIDERS);

export const DEFAULT_PROVIDER = "OpenRouter";

export const DEFAULT_MODEL_BY_PROVIDER = Object.fromEntries(
  PROVIDER_LIST.map((provider) => [provider.id, provider.defaultModel])
);
