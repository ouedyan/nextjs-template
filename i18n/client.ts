"use client";

import { createI18nClient } from "next-international/client";
import { getLocales } from "@/i18n/utils";

export const {
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
  I18nProviderClient,
} = createI18nClient(getLocales());
