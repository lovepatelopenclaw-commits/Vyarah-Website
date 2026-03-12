import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const FROM_EMAIL = process.env.EMAIL_FROM || "Vyarah <notifications@vyarah.com>";
const TO_EMAIL = process.env.EMAIL_TO || "hello@vyarah.com";

/**
 * Send an email notification. Non-blocking — failures are logged but never thrown.
 *
 * @param {"contact" | "newsletter"} type
 * @param {object} data
 */
export async function sendNotification(type, data) {
    if (!resend) {
        console.warn("[Email] RESEND_API_KEY not set — skipping email notification");
        return;
    }

    try {
        if (type === "contact") {
            await resend.emails.send({
                from: FROM_EMAIL,
                to: TO_EMAIL,
                subject: `New Contact Form: ${data.name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <table style="border-collapse:collapse;width:100%;max-width:600px;">
                        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.name)}</td></tr>
                        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
                        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Business</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.business)}</td></tr>
                        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.message)}</td></tr>
                    </table>
                    <p style="margin-top:16px;color:#888;font-size:12px;">Sent from vyarah.com contact form</p>
                `,
            });
            console.log("[Email] Contact notification sent");
        }

        if (type === "newsletter") {
            await resend.emails.send({
                from: FROM_EMAIL,
                to: TO_EMAIL,
                subject: `New Newsletter Subscriber: ${data.email}`,
                html: `
                    <h2>New Newsletter Subscriber</h2>
                    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
                    <p style="margin-top:16px;color:#888;font-size:12px;">Subscribed via vyarah.com</p>
                `,
            });
            console.log("[Email] Newsletter notification sent");
        }
    } catch (error) {
        console.error(`[Email] Failed to send ${type} notification:`, error.message);
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
