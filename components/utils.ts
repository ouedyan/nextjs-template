import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata, ResolvingMetadata } from "next";
import { isUndefined, omitBy, toMerged } from "es-toolkit";
import { getPathname } from "@nimpl/getters/get-pathname";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type PageMetadata = {
  title?: string;
  description?: string;
};
export const generatePageMetadata = async (
  meta: PageMetadata,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const parentMeta = await parent;
  const pathName = getPathname();

  // See https://nextjs.org/docs/app/building-your-application/optimizing/metadata#ordering
  // See https://nextjs.org/docs/app/building-your-application/optimizing/metadata#merging
  // Fixes undefined values replacing defined parent values while next.js merges
  return omitBy(
    toMerged<Metadata, Metadata>(
      // @ts-expect-error - ResolvingMetadata includes null values
      { openGraph: parentMeta.openGraph, twitter: parentMeta.twitter },
      {
        title: meta.title,
        description: meta.description,
        openGraph: {
          title: meta.title,
          description: meta.description,
          url: pathName,
        },
        twitter: { title: meta.title, description: meta.description },
      },
    ),
    isUndefined,
  );
};
