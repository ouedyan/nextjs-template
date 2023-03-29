//  forwardRef global type augmentation to not lose generic type-safety for generic components

// See: https://fettblog.eu/typescript-react-generic-forward-refs/#option-3%3A-augment-forwardref
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012

import React from "react";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
