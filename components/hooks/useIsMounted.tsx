import React, { useState } from "react";

// See https://mui.com/base-ui/react-no-ssr/
// See [NoSsr]
export default function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 */
const useLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
