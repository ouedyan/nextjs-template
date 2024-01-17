import { createI18nServer } from "next-international/server";
import { getLocales } from "@/i18n/utils";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(getLocales());
