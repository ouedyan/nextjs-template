import { useEffect, useState } from "react";
import useCurrentNavigation from "@/components/hooks/useCurrentNavigation";

export default function useIsCurrentRoute(link?: string) {
  const [isCurrentRoute, setIsCurrentRoute] = useState(false);
  const [isParentRoute, setIsParentRoute] = useState(false);

  const { url } = useCurrentNavigation();

  useEffect(() => {
    if (link) {
      // TODO Change siteUrl env
      const currentUrl = new URL(url, process.env.NEXT_PUBLIC_SITE_URL);
      const linkUrl = new URL(link, process.env.NEXT_PUBLIC_SITE_URL);
      // console.log(currentUrl);
      // console.log(linkUrl);
      const isCurrentPage =
        currentUrl.pathname == linkUrl.pathname &&
        currentUrl.hash == linkUrl.hash;
      const isParentPage = currentUrl.pathname.startsWith(linkUrl.pathname);
      // console.log("isCurrentPage", isCurrentPage);
      setIsCurrentRoute(isCurrentPage);
      setIsParentRoute(isParentPage);
    } else {
      setIsCurrentRoute(false);
      setIsParentRoute(false);
    }
  }, [url, link]);

  return { isCurrentRoute, isParentRoute };
}
