import React, { ComponentPropsWithoutRef } from "react";
import useIsMounted from "@/components/hooks/useIsMounted";

// https://react.dev/reference/react-dom/client/hydrateRoot#handling-different-client-and-server-content
// https://jotai.org/docs/utilities/storage#server-side-rendering
const NoSsr = ({
  children,
  ssrFallback,
  ...rest
}: ComponentPropsWithoutRef<typeof React.Fragment> & {
  ssrFallback?: React.ReactNode;
}) => {
  const isMounted = useIsMounted();

  return (
    <React.Fragment {...rest}>
      {isMounted ? children : ssrFallback}
    </React.Fragment>
  );
};

export default NoSsr;
