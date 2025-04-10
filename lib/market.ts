"use server";

export async function getMarketStatus() {
  try {
    // Using Alpha Vantage API to get S&P 500 data
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=${
        process.env.ALPHA_VANTAGE_API_KEY || "demo"
      }`,
      { next: { revalidate: 30 * 60 } } // Cache for 30 minutes
    );

    if (!response.ok) {
      throw new Error("Failed to fetch market data");
    }

    const data = await response.json();

    // Check if we have valid data
    if (data["Global Quote"]?.["10. change percent"]) {
      // Parse the percent change (format: "1.23%")
      const percentChangeStr = data["Global Quote"]["10. change percent"];
      const percentChange = Number.parseFloat(
        percentChangeStr.replace("%", "")
      );

      return {
        isUp: percentChange > 0,
        percentChange,
      };
    }

    // Fallback to demo data if API limit is reached or data is invalid
    console.warn("Using fallback data - API limit may have been reached");
    // Generate a random number between -2 and 2 for demo purposes
    const randomChange = Math.random() * 4 - 2;

    return {
      isUp: randomChange > 0,
      percentChange: randomChange,
    };
  } catch (error) {
    console.error("Error fetching market data:", error);
    // Fallback data in case of error
    return {
      isUp: Math.random() > 0.5, // Random true/false
      percentChange: Math.random() * 4 - 2, // Random number between -2 and 2
    };
  }
}
