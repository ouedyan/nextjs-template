"use client";

import { useEffect } from "react";
import { useI18n } from "@/i18n/client";

export default function LocalizedError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Throw error as overlay instead in dev
  if (process.env.NODE_ENV === "development") throw error;

  const t = useI18n();

  useEffect(() => {
    // Log the error. Eg: error reporting service/ analytics ...
    console.error("app/[locale]/error", error);
  }, [error]);

  return (
    <div>
      <h2>{t("common.something-went-wrong")}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {t("common.try-again")}
      </button>
    </div>
  );
}
