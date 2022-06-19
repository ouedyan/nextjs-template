import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  //TODO Change this SEO Defaults
  return (
    <>
      <DefaultSeo
        defaultTitle="Next js React Web Project Template"
        titleTemplate="%s | Next js React Web Project Template"
        description="Next js React Web Project Template (Typescript, Sass, Tailwind Css, SVGR, Prettier , SEO and On-Demand ISR pre-configs and other generally used features and tools in production.)"
        canonical={`https://example.com${
          router.asPath === "/" ? "" : router.asPath
        }`}
        openGraph={{
          type: "website",
          url: `https://example.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
          locale: "en",
          title: "Next js React Web Project Template",
          description:
            "Next js React Web Project Template (Typescript, Sass, Tailwind Css, SVGR, Prettier , SEO and On-Demand ISR pre-configs and other generally used features and tools in production.)",
          site_name: "Next js React Web Project Template",
        }}
        mobileAlternate={{
          media: "only screen and (max-width: 640px)",
          href: `https://example.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
        }}
        twitter={{
          handle: "@example",
          site: "@example",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
