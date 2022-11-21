import Image, { ImageProps } from "next/image";
import React, { useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { twMerge } from "tailwind-merge";

const NextImage = ({
  className,
  nextImageClassName,
  src,
  errorSrc,
  style,
  ...rest
}: ImageProps & {
  nextImageClassName?: string;
  errorSrc?: ImageProps["src"];
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={twMerge(
        "relative overflow-hidden",
        !loaded && "bg-gradient-to-br from-gray-50 to-gray-200",
        className
      )}
      style={style}
    >
      <ErrorBoundary
        // ignore={(e) => e.message.startsWith("Failed to parse src")}
        ignore={(e) => true}
      >
        <Image
          key={JSON.stringify(src)}
          className={twMerge("h-full w-full object-cover", nextImageClassName)}
          fill={true}
          onLoadingComplete={() => {
            setLoaded(true);
            setError(false);
          }}
          onError={(e) => {
            setError(true);
            setLoaded(false);
          }}
          src={error && errorSrc ? errorSrc : src}
          {...rest}
        />
      </ErrorBoundary>
    </div>
  );
};

export default NextImage;
