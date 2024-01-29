"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Throw error as overlay instead in dev
  if (process.env.NODE_ENV === "development") throw error;

  useEffect(() => {
    // Log the error. Eg: error reporting service/ analytics ...
    console.error("app/error", error);
  }, [error]);

  return (
    <html>
      <body className={inter.className}>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </body>
    </html>
  );
}
