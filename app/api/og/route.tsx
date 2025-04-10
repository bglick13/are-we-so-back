import { ImageResponse } from "next/og"
import { getMarketStatus } from "@/lib/market"

export const runtime = "edge"

// Force dynamic rendering
export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const { isUp, percentChange } = await getMarketStatus()

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 128,
          color: "white",
          background: isUp ? "#10b981" : "#ef4444",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 128,
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {isUp ? "YES" : "NO"}
        </div>
        <div
          style={{
            fontSize: 64,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>S&P 500: {percentChange.toFixed(2)}%</span>
          <span style={{ marginLeft: "10px" }}>{isUp ? "↑" : "↓"}</span>
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: "40px",
            opacity: 0.8,
          }}
        >
          Are We So Back?
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error) {
    console.error("Error generating OG image:", error)

    // Return a fallback image if there's an error
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 128,
          color: "white",
          background: "#3b82f6",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 128,
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Are We So Back?
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  }
}
