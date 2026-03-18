import { ImageResponse } from "next/og";

export const alt = "Vyarah — AI-Powered Digital Growth Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative circle */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "-100px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "rgba(166, 186, 152, 0.15)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "-80px",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background: "rgba(166, 186, 152, 0.1)",
                        display: "flex",
                    }}
                />
                {/* Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "24px",
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            fontSize: "72px",
                            fontWeight: 700,
                            color: "#ffffff",
                            letterSpacing: "-2px",
                            display: "flex",
                        }}
                    >
                        <span>Vya</span>
                        <span style={{ color: "#a6ba98" }}>rah</span>
                    </div>
                    <div
                        style={{
                            fontSize: "28px",
                            color: "#a6ba98",
                            fontWeight: 500,
                            display: "flex",
                        }}
                    >
                        AI-Powered Digital Growth Agency
                    </div>
                    <div
                        style={{
                            fontSize: "20px",
                            color: "#999999",
                            maxWidth: "700px",
                            textAlign: "center",
                            lineHeight: 1.5,
                            display: "flex",
                        }}
                    >
                        We build revenue machines, not websites.
                    </div>
                </div>
                {/* Bottom bar */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "6px",
                        background: "linear-gradient(90deg, #a6ba98, #8fa87e, #a6ba98)",
                        display: "flex",
                    }}
                />
            </div>
        ),
        { ...size }
    );
}
