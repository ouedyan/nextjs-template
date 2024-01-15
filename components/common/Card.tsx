"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "../utils";

const Card = ({
  title,
  content,
  className,
  ...rest
}: ComponentPropsWithoutRef<"a"> & {
  title: string;
  content: string;
}) => {
  return (
    <a
      className={cn(
        "group rounded-lg border border-transparent px-5 py-4 transition-colors",
        "hover:border-gray-300 hover:bg-gray-100",
        "hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">{content}</p>
    </a>
  );
};

export default Card;
