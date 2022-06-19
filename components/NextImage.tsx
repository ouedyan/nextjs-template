import Image, { ImageProps } from "next/image";
import React, { useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { twMerge } from "tailwind-merge";

const NextImage = ({ className, style, ...rest }: ImageProps) => {
  //TODO Wait for the error event not being sent to be fixed https://github.com/facebook/react/issues/15446
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={twMerge(
        `relative overflow-hidden ${
          loaded ? "" : "bg-gradient-to-br from-gray-50 to-gray-200"
        }`,
        className
      )}
      style={style}
    >
      <ErrorBoundary
        // ignore={(e) => e.message.startsWith("Failed to parse src")}
        ignore={(e) => true}
      >
        <Image
          key={JSON.stringify(rest.src)}
          className="h-full w-full"
          layout="fill"
          objectFit="cover"
          onLoadingComplete={() => setLoaded(true)}
          {...rest}
        />
      </ErrorBoundary>
    </div>
  );
};

export default NextImage;
