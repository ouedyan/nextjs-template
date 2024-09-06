import Link from "next/link";
import { getI18n } from "@/i18n/server";
import LocaleSelector from "@/components/common/LocaleSelector";
import { Heading, HeadingLevel } from "@ariakit/react";
import { Metadata, ResolvingMetadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import ThemeToggle from "@/components/common/ThemeToggle";
import { generatePageMetadata } from "@/components/utils";

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getI18n();

  return await generatePageMetadata({ title: t("auth.login") }, parent);
}

export default async function Demo({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();

  // TODO Showcase template technologies and utilities (clsx, custom components...etc)

  return (
    <div className="flex flex-col items-center">
      <HeadingLevel>
        <Heading className="mb-4 text-xl">{t("common.demo")}</Heading>
        <Link href="/" className="underline">
          {t("home.homepage")}
        </Link>
        <LocaleSelector />
        <ThemeToggle className="mt-4" />
      </HeadingLevel>
    </div>
  );
}
