"use client";

import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  isServer,
} from "@tanstack/react-query";
import { Provider } from "jotai";
import atomStore from "@/lib/data/atomStore";
import { DevTools } from "jotai-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, useTheme } from "next-themes";
import { toast, ToastContainer } from "react-toastify";

// Jotai Devtools css
import "jotai-devtools/styles.css";

// See https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid re-fetching immediately on the client
        staleTime: 60 * 1000,
        // Other config...
      },
    },
    queryCache: new QueryCache({
      // onError, onSuccess, onSettled callbacks removed since v5; Allow them back using query's meta
      // See https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose#defining-on-demand-messages

      onError: (error, query) => {
        if (typeof query.meta?.onError == "function") {
          query.meta.onError(error);
        } else {
          toast.error(`An error occurred: ${error}`);
        }
      },
      onSuccess: (data, query) => {
        if (typeof query.meta?.onSuccess == "function") {
          query.meta.onSuccess(data);
        }
      },
      onSettled: (data, error, query) => {
        if (typeof query.meta?.onSettled == "function") {
          query.meta.onSettled(data, error);
        }
      },
    }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

const Providers = ({ children }: { children?: ReactNode }) => {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <ThemeProvider attribute="class" enableSystem enableColorScheme>
      <Provider store={atomStore}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ThemedToastContainer />
          <ReactQueryDevtools buttonPosition="bottom-right" />
          <DevTools store={atomStore} />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default Providers;

const ThemedToastContainer = (
  props: ComponentPropsWithoutRef<typeof ToastContainer>,
) => {
  const { resolvedTheme } = useTheme();
  return <ToastContainer theme={resolvedTheme} {...props} />;
};
