import { getMarketStatus } from "@/lib/market";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { SocialShare } from "@/components/social-share";
import { Toaster } from "@/components/ui/toaster";

export default async function Home() {
  const { isUp, percentChange } = await getMarketStatus();

  const shareText = `Are we so back? ${
    isUp ? "YES" : "NO"
  } • S&P 500: ${percentChange.toFixed(2)}%`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-8xl sm:text-9xl font-extrabold mb-8">
          {isUp ? "YES" : "NO"}
        </h1>

        <div className="flex items-center justify-center mb-12">
          <div
            className={`flex items-center text-2xl font-semibold ${
              isUp ? "text-green-500" : "text-red-500"
            }`}
          >
            <span className="mr-2">S&P 500:</span>
            <span>{percentChange.toFixed(2)}%</span>
            {isUp ? (
              <ArrowUp className="ml-1" />
            ) : (
              <ArrowDown className="ml-1" />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="text-lg font-medium mb-2">Share this result:</div>
          <SocialShare text={shareText} />

          <div className="text-sm text-muted-foreground mt-8">
            <p>
              <Link
                href="https://github.com/yourusername/are-we-so-back"
                className="underline hover:text-primary"
              >
                View on GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
