import Head from "next/head";
import { useRouter } from "next/router";

// TODO Change these default meta
const defaultMeta = {
  title: "Next js React Web Project Template",
  siteName: "Next js React Web Project Template",
  description:
    "Next js React Web Project Template (Typescript, Sass, Tailwind Css, SVGR, Prettier , SEO and On-Demand ISR pre-configs and other generally used features and tools in production.)",
  /** Without additional '/' on the end*/
  url: "https://example.com",
  type: "website",
  robots: "follow, index",
  /** No need to be filled, will be populated with openGraph function */
  image: "",
};

type SeoProps = {
  date?: string;
  author?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // TODO OpenGraph
  // Use siteName if there is templateTitle
  // but show full title if there is none
  // meta["image"] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@annelersatiyor" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
        </>
      )}
      {meta.author && (
        <meta name="author" property="article:author" content={meta.author} />
      )}
      {/* TODO Add shopping metas */}
    </Head>
  );
}
