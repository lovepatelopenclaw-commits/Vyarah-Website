import { NextResponse } from "next/server";
import { writeToSheet, isGoogleSheetsConfigured } from "@/lib/googleSheets";
import { sendNotification } from "@/lib/email";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        // Write to Google Sheets if configured
        if (isGoogleSheetsConfigured()) {
            const result = await writeToSheet("newsletter", { email });

            if (result.duplicate) {
                return NextResponse.json(
                    { success: true, message: "Already subscribed" },
                    { status: 200 }
                );
            }

            if (!result.success) {
                console.error("Google Sheets write error:", result.message);
            }
        } else {
            console.warn("[Newsletter] Google Sheets not configured — data not saved. Set GOOGLE_SCRIPT_URL in env.");
        }

        // Send email notification (non-blocking)
        sendNotification("newsletter", { email });

        return NextResponse.json(
            { success: true, message: "Subscribed successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Newsletter API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
