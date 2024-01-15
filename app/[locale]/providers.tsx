"use client";

import React, { ReactNode, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import atomStore from "@/lib/data/atomStore";
import { DevTools } from "jotai-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";

const Providers = ({
  children,
  // langResources,
  // locale,
}: {
  children?: ReactNode;
  // langResources: Resource;
  // locale: string;
}) => {
  // This ensures that data is not shared between different users and requests,
  // while still only creating the QueryClient once per component lifecycle.
  const queryClientRef = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid re-fetching immediately on the client
          // https://tanstack.com/query/latest/docs/react/guides/advanced-ssr#initial-setup
          staleTime: 60 * 1000,
        },
      },
    }),
  );

  return (
    <ThemeProvider attribute="class" enableSystem enableColorScheme>
      <Provider store={atomStore}>
        <QueryClientProvider client={queryClientRef.current}>
          {children}
          <ReactQueryDevtools buttonPosition="bottom-right" />
          <DevTools store={atomStore} />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default Providers;
