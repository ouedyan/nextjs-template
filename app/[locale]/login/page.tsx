import Link from "next/link";
import { getI18n } from "@/i18n/server";
import LocaleSelector from "@/components/common/LocaleSelector";
import { Heading, HeadingLevel } from "@ariakit/react";
import { Metadata, ResolvingMetadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import ThemeToggle from "@/components/common/ThemeToggle";

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t("auth.login"),
    // @ts-ignore
    openGraph: { ...(await parent).openGraph, title: t("auth.login") },
    // @ts-ignore
    twitter: { ...(await parent).twitter, title: t("auth.login") },
  };
}

export default async function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return (
    <div className="flex flex-col items-center">
      <HeadingLevel>
        <Heading className="mb-4 text-xl">{t("auth.login")}</Heading>
        <Link href="/" className="underline">
          {t("home.homepage")}
        </Link>
        <LocaleSelector />
        <ThemeToggle className="mt-4" />
      </HeadingLevel>
    </div>
  );
}
