"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Note: Triggered only in Prod by default, so throws error as overlay in dev by default

  useEffect(() => {
    // Log the error. Eg: error reporting service/ analytics ...
    console.error("app/global-error", error);
  }, [error]);

  return (
    <html>
      <body className={inter.className}>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
