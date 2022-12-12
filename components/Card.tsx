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
      href={href}
      className={twMerge(
        "m-4 max-w-[300px] rounded-[10px] border border-solid border-[#eaeaea] p-6",
        "text-left text-inherit [text-decoration:none]",
        "transition-[color,_border-color] duration-150 ease-in-out",
        "hover:border-[#0070f3] hover:text-[#0070f3]",
        "focus:border-[#0070f3] focus:text-[#0070f3]",
        "active:border-[#0070f3] active:text-[#0070f3]",
        "dark:border-[#222]",
        className
      )}
    >
      <h2 className="mb-4 text-[1.5rem]">{title}</h2>
      <p className="m-0 text-[1.25rem] leading-[1.5]">{content}</p>
    </a>
  );
};

export default Card;
