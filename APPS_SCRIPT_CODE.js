// ==============================================
// GOOGLE APPS SCRIPT — Paste this in your Google Sheet
// ==============================================
// 
// HOW TO USE:
// 1. Open your Google Sheet
// 2. Go to Extensions → Apps Script
// 3. Delete any existing code and paste ALL of this
// 4. Click Deploy → New Deployment
//    - Type: Web App  
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Click Deploy → copy the URL
// 6. Paste the URL in your .env.local as GOOGLE_SCRIPT_URL
//
// SHEET SETUP:
// Create two tabs (sheets) in your Google Sheet:
// Tab 1: "Contacts"  → Headers: Name | Email | Business | Message | Timestamp
// Tab 2: "Newsletter" → Headers: Email | Timestamp
// ==============================================

function doPost(e) {
    try {
        var data = JSON.parse(e.postData.contents);
        var ss = SpreadsheetApp.getActiveSpreadsheet();

        if (data.action === "contact") {
            var sheet = ss.getSheetByName("Contacts");
            if (!sheet) {
                sheet = ss.insertSheet("Contacts");
                sheet.appendRow(["Name", "Email", "Business", "Message", "Timestamp"]);
            }
            sheet.appendRow([
                data.name,
                data.email,
                data.business,
                data.message,
                new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            ]);
            return ContentService
                .createTextOutput(JSON.stringify({ success: true }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        if (data.action === "newsletter") {
            var sheet = ss.getSheetByName("Newsletter");
            if (!sheet) {
                sheet = ss.insertSheet("Newsletter");
                sheet.appendRow(["Email", "Timestamp"]);
            }

            // Check for duplicates
            var emails = sheet.getRange("A:A").getValues().flat();
            if (emails.indexOf(data.email) !== -1) {
                return ContentService
                    .createTextOutput(JSON.stringify({ success: true, duplicate: true, message: "Already subscribed" }))
                    .setMimeType(ContentService.MimeType.JSON);
            }

            sheet.appendRow([
                data.email,
                new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            ]);
            return ContentService
                .createTextOutput(JSON.stringify({ success: true }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        return ContentService
            .createTextOutput(JSON.stringify({ success: false, message: "Unknown action" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Required: handle GET requests (Google's deploy test)
function doGet() {
    return ContentService
        .createTextOutput(JSON.stringify({ status: "Vyarah API is running" }))
        .setMimeType(ContentService.MimeType.JSON);
}
