"use client";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { useI18n } from "@/i18n/client";

const ThemeToggle = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  const { theme, setTheme } = useTheme();

  const t = useI18n();

  return (
    <div className={twMerge("", className)} {...rest}>
      <select
        value={theme}
        className="dark:bg-black"
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">{t("common.theme.system")}</option>
        <option value="dark">{t("common.theme.dark")}</option>
        <option value="light">{t("common.theme.light")}</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
