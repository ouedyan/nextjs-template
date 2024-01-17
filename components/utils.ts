import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata, ResolvingMetadata } from "next";
import { getPathname } from "next-impl-getters/get-pathname";

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
  const pathName = getPathname();

  return {
    title: meta.title,
    description: meta.description,
    // @ts-ignore
    openGraph: {
      ...(await parent)?.openGraph,
      title: meta.title,
      description: meta.description,
      url: pathName ?? undefined,
    },
    // @ts-ignore
    twitter: {
      ...(await parent).twitter,
      title: meta.title,
      description: meta.description,
    },
  };
};
