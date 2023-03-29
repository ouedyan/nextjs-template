import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ControlledErrorBoundary from "@/components/ControlledErrorBoundary";

const NextImage = ({
  className,
  nextImageClassName,
  alt,
  src,
  errorAltSources,
  style,
  ...rest
}: ImageProps & {
  nextImageClassName?: string;
  errorAltSources?: ImageProps["src"][];
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setError(undefined);
  }, [src, errorAltSources]);

  // Note: next/image throws some image loading errors as Exceptions when in dev and through onError when in prod,
  // So we redirect all errors thrown by onError to be also handled as Exceptions by the ErrorBoundary
  return (
    <ControlledErrorBoundary
      // ignore={(e) => e.message.startsWith("Failed to parse src")}
      // ignore={(e) => {
      //   return true;
      // }}
      error={error}
      onError={(e) => setError(e)}
      fallbackComponent={(error) => {
        const nextAltSources = errorAltSources?.slice(1);
        const nextAltSourcesNullOrEmpty =
          nextAltSources == null || nextAltSources.length == 0;
        return errorAltSources ? (
          <NextImage
            className={className}
            nextImageClassName={nextImageClassName}
            alt={alt}
            src={errorAltSources[0]}
            errorAltSources={
              nextAltSourcesNullOrEmpty ? undefined : nextAltSources
            }
            style={style}
            {...rest}
          />
        ) : (
          <div
            className={twMerge(
              "relative overflow-hidden",
              !loaded && "bg-gradient-to-br from-gray-50 to-gray-200",
              className
            )}
            style={style}
          />
        );
      }}
    >
      <div
        className={twMerge(
          "relative overflow-hidden",
          !loaded && "bg-gradient-to-br from-gray-50 to-gray-200",
          className
        )}
        style={style}
      >
        <Image
          key={JSON.stringify(src)}
          className={twMerge("h-full w-full object-cover", nextImageClassName)}
          fill={true}
          alt={alt}
          src={src}
          onLoadingComplete={() => {
            // console.log(`Image with src: ${src} loaded`);
            setLoaded(true);
            setError(undefined);
          }}
          onError={(e) => {
            // console.log(
            //   `Error on image with src: ${src}\nError src: ${errorAltSources?.[0]}`
            // );
            setLoaded(false);
            // Redirect event errors to ErrorBoundary
            setError(new Error(`Error on image with src: ${src}`));
          }}
          {...rest}
        />
      </div>
    </ControlledErrorBoundary>
  );
};

export default NextImage;
