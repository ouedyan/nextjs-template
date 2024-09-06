"use server";

import { revalidateTag } from "next/cache";

export const revalidateTagData = async (tag: string) => {
  revalidateTag(tag);
};
