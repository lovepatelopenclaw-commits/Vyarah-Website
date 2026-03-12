/**
 * Google Sheets integration via Google Apps Script web app.
 * 
 * This is a zero-dependency approach — no npm packages needed.
 * The Apps Script web app receives POST requests and writes to the Sheet.
 * 
 * Setup:
 * 1. Create a Google Sheet
 * 2. Extensions → Apps Script → paste the code from APPS_SCRIPT_CODE.js
 * 3. Deploy → Web App → set access to "Anyone"
 * 4. Copy the URL to .env.local as GOOGLE_SCRIPT_URL
 */

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

/**
 * Check if Google Sheets integration is configured.
 */
export function isGoogleSheetsConfigured() {
    return Boolean(SCRIPT_URL);
}

/**
 * Send data to the Google Apps Script web app.
 * 
 * Google Apps Script web apps return a 302 redirect on POST.
 * We use `redirect: "follow"` and send as text/plain to avoid
 * CORS preflight issues when called from server-side.
 * 
 * @param {"contact" | "newsletter"} action - Which sheet to write to
 * @param {object} data - The form data to send
 * @returns {{ success: boolean, message?: string }}
 */
export async function writeToSheet(action, data) {
    if (!SCRIPT_URL) {
        console.warn("[Google Sheets] GOOGLE_SCRIPT_URL not set — skipping write. Set it in Vercel Environment Variables.");
        return { success: false, message: "not_configured" };
    }

    try {
        const payload = JSON.stringify({ action, ...data });
        console.log(`[Google Sheets] Writing ${action} data to sheet...`);

        const res = await fetch(SCRIPT_URL, {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: payload,
        });

        const text = await res.text();

        try {
            const result = JSON.parse(text);
            if (result.success) {
                console.log(`[Google Sheets] ${action} write successful`);
            } else {
                console.error(`[Google Sheets] ${action} write failed:`, result.message);
            }
            return result;
        } catch {
            console.error(`[Google Sheets] Non-JSON response (status ${res.status}):`, text.slice(0, 200));
            return { success: false, message: `Unexpected response: ${res.status}` };
        }
    } catch (error) {
        console.error(`[Google Sheets] Network error:`, error.message);
        return { success: false, message: error.message };
    }
}
