"use client";

import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { useChangeLocale, useCurrentLocale } from "@/i18n/client";
import clsx from "clsx";

const LocaleSelector = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <div className={twMerge("flex flex-col items-center", className)} {...rest}>
      <button
        onClick={() => changeLocale("en")}
        className={clsx(locale == "en" && "text-yellow-600")}
      >
        English
      </button>
      <button
        onClick={() => changeLocale("fr")}
        className={clsx(locale == "fr" && "text-yellow-600")}
      >
        Français
      </button>
    </div>
  );
};

export default LocaleSelector;
