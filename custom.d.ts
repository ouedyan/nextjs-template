import React, { forwardRef } from "react";
import { DefaultError } from "@tanstack/react-query";

//  forwardRef global type augmentation to not lose generic type-safety for generic components

// See: https://fettblog.eu/typescript-react-generic-forward-refs/#option-3%3A-augment-forwardref
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012

declare module "react" {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

// Alternative solution
// https://x.com/mattpocockuk/status/1683414495291486208?s=20
// Declares a type that works with
// generic components
type FixedForwardRef = <T, P = object>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

// Cast the old forwardRef to the new one
export const fixedForwardRef = forwardRef as FixedForwardRef;

// Type useQuery's meta according to global query cache config

export type QueryMeta<TData = unknown, TError = DefaultError | null> = {
  onError?: (error?: TError) => void;
  onSuccess?: (data?: TData) => void;
  onSettled?: (data?: TData, error?: TError) => void;
};

declare module "@tanstack/react-query" {
  // See https://github.com/TanStack/query/discussions/6045#discussioncomment-7087696

  interface Register {
    queryMeta: QueryMeta;
    mutationMeta: Record<string, unknown>;
  }
}
