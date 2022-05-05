import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  href,
  title,
  content,
  className,
}: {
  href: string;
  title: string;
  content: string;
  className?: string;
}) => {
  return (
    <a
      href="https://github.com/vercel/next.js/tree/canary/examples"
      className={twMerge(
        "m-4 max-w-[300px] rounded-[10px] border border-solid border-[#eaeaea] p-[1.5rem] text-left text-inherit no-underline transition-[color,_border-color] duration-150 ease-in-out hover:border-[#0070f3] hover:text-[#0070f3] focus:border-[#0070f3] focus:text-[#0070f3] active:border-[#0070f3] active:text-[#0070f3]",
        className
      )}
    >
      <h2 className="mb-4 text-[1.5rem]">{title}</h2>
      <p className="m-0 text-[1.25rem] leading-[1.5]">
        Discover and deploy boilerplate example Next.js projects.
      </p>
    </a>
  );
};

export default Card;
