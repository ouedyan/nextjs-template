// SVGR React Props Type
// https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration/73987412#73987412
// TODO Doesn't work

declare module "*.svg" {
  import React from "react";

  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default content;
}

//  forwardRef global type augmentation to not lose generic type-safety for generic components

// See: https://fettblog.eu/typescript-react-generic-forward-refs/#option-3%3A-augment-forwardref
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012

import React from "react";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

// Alternative solution
// https://x.com/mattpocockuk/status/1683414495291486208?s=20
// Declares a type that works with
// generic components
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

// Cast the old forwardRef to the new one
export const fixedForwardRef = forwardRef as FixedForwardRef;
