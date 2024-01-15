import { createI18nMiddleware } from "next-international/middleware";

const i18nConfig: Parameters<typeof createI18nMiddleware>[0] = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  urlMappingStrategy: "rewriteDefault",
};

export default i18nConfig;
