import { usePathname, useSearchParams } from "next/navigation";

export default function useCurrentNavigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // See router events https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
  const url = `${pathname}?${searchParams}`;

  return { url, pathname, searchParams };
}
