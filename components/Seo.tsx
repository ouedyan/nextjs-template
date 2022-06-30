import { NextSeo, NextSeoProps } from "next-seo";

type SeoProps = {
  mainTitle?: string;
  mainDescription?: string;
} & NextSeoProps;

export default function Seo({
  title,
  mainTitle,
  description,
  mainDescription,
  openGraph,
  ...props
}: SeoProps) {
  return (
    <NextSeo
      title={title ?? mainTitle}
      description={description ?? mainDescription}
      openGraph={{
        ...openGraph,
        title: openGraph?.title ?? mainTitle ?? props.defaultTitle,
        description: openGraph?.description ?? mainDescription,
      }}
      {...props}
    />
  );
}
