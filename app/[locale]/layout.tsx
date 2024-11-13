import type { Metadata, Viewport } from "next";
import Providers from "@/app/providers";
import MainLayout from "@/components/layout/MainLayout";
import { ReactNode } from "react";
import { I18nProviderClient } from "@/i18n/client";
import Locale from "intl-locale-textinfo-polyfill";
import { getStaticParams } from "@/i18n/server";
import i18nConfig from "@/i18n.config";
import { notFound } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import localFont from "next/font/local";

const websiteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  title: "Next js React Web Project Template",
  description:
    "Next.js React Web Project Template (App directory, Typescript, Sass, Tailwind Css, SVGR, Prettier, Storybook, SEO, RSC helpers and other generally used features and tools in production.)",
};

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return {
    //TODO Update these SEO Defaults
    metadataBase: new URL(websiteConfig.url),
    title: {
      default: websiteConfig.title,
      template: `%s | ${websiteConfig.title}`,
    },
    description: websiteConfig.description,
    keywords: "Next.js, React, App dir, Template, Starter, RSC",
    robots: { index: true, follow: true },
    // TODO: Defaults favicons, generate your own from https://realfavicongenerator.net/. See the /public/favicons folder.
    icons: {
      icon: [
        { url: "/favicons/favicon-32x32.png", sizes: "32x32" },
        { url: "/favicons/favicon-16x16.png", sizes: "16x16" },
        { url: "/favicons/favicon.ico" },
        // { url: "/favicons/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
      ],
      shortcut: "/favicons/favicon-16x16.png",
      apple: "/favicons/apple-touch-icon.png",
    },
    manifest: "/favicons/site.webmanifest",
    openGraph: {
      url: websiteConfig.url,
      title: websiteConfig.title,
      description: websiteConfig.description,
      siteName: websiteConfig.title,
      type: "website",
      locale: locale,
      // images: [`${websiteConfig.url}/images/opengraph.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: websiteConfig.title,
      description: websiteConfig.description,
      // images: [`${websiteConfig.url}/images/twitter.jpg`],
      // creator: '@user',
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export function generateStaticParams() {
  return getStaticParams();
}

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  // Redirect not found paths not handled by i18n middleware (eg: non-existent.file. See matcher) and matching dynamic /[locale] to not-found
  // @ts-expect-error - locale is a dynamic string, type unknown at compile time
  if (!i18nConfig.locales.includes(locale)) return notFound();

  const { direction: dir } = new Locale(locale).textInfo;

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <I18nProviderClient locale={locale}>
            <MainLayout>{children}</MainLayout>
          </I18nProviderClient>
        </Providers>
      </body>
    </html>
  );
}
