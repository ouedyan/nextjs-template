// SVGR React Props Type
// https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration/73987412#73987412

declare module "*.svg" {
  import React from "react";

  const content: React.FC<React.SVGProps<SVGSVGElement>>;

  export default content;
}

declare module "*.svg?url" {
  const content: import("next/image").StaticImageData;

  export default content;
}
