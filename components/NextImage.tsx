"use client";

import Image, { ImageProps, StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ControlledErrorBoundary from "@/components/ControlledErrorBoundary";
import defaultLoader from "next/dist/shared/lib/image-loader";
import {
  ImageConfig,
  imageConfigDefault,
} from "next/dist/shared/lib/image-config";
import {
  StaticImport,
  StaticRequire,
} from "next/dist/shared/lib/get-img-props";

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
  // Make image loader's remote url parsing server dev errors non-blocking
  let serverDevError: Error | null = null;
  if (process.env.NODE_ENV !== "production") {
    if (!isStaticImport(src)) {
      try {
        checkRemoteImageForServerErrors(src);
      } catch (err) {
        console.log("Server Image Dev Error: ", err);
        serverDevError = err as Error;
      }
    }
  }

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setError(undefined);
  }, [src, errorAltSources]);

  // Note: next/image throws some image loading errors as Exceptions when in dev and through onError when in prod,
  // So we redirect all errors thrown by onError to be also handled as Exceptions by the ErrorBoundary
  // Note: Server errors don't trigger client events
  return (
    <ControlledErrorBoundary
      // ignore={(e) => e.message.startsWith("Failed to parse src")}
      // ignore={(e) => {
      //   return true;
      // }}
      error={serverDevError ?? error}
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
              className,
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
          className,
        )}
        style={style}
      >
        <Image
          key={JSON.stringify(src)}
          className={twMerge("h-full w-full object-cover", nextImageClassName)}
          fill={true}
          alt={alt}
          src={src}
          onLoad={(e) => {
            // console.log(`Image with src: ${src} loaded`);
            setLoaded(true);
            setError(undefined);
          }}
          onError={(e) => {
            console.log("error", error);
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

function isStaticRequire(
  src: StaticRequire | StaticImageData,
): src is StaticRequire {
  return (src as StaticRequire).default !== undefined;
}

function isStaticImageData(
  src: StaticRequire | StaticImageData,
): src is StaticImageData {
  return (src as StaticImageData).src !== undefined;
}

function isStaticImport(src: string | StaticImport): src is StaticImport {
  return (
    typeof src === "object" &&
    (isStaticRequire(src as StaticImport) ||
      isStaticImageData(src as StaticImport))
  );
}

function checkRemoteImageForServerErrors(src: string) {
  const nextImageConfig: ImageConfig = {
    remotePatterns: [
      {
        hostname: "*",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  };
  // See https://github.com/vercel/next.js/blob/3734ae889047c1dd9efafd75435408fd2a291833/packages/next/src/shared/lib/image-loader.ts
  // See https://github.com/vercel/next.js/blob/3734ae889047c1dd9efafd75435408fd2a291833/packages/next/src/shared/lib/image-config.ts#L103
  defaultLoader({
    src,
    config: {
      ...imageConfigDefault,
      ...nextImageConfig,
    },
    width: 400,
  });
}
