import { createI18nMiddleware } from "next-international/middleware";

const i18nConfig = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault",
} as const satisfies Parameters<typeof createI18nMiddleware>[0];

export default i18nConfig;

export type Locale = (typeof i18nConfig.locales)[number];
