import Link from "next/link";
import React from "react";
import { LinkProps } from "next/dist/client/link";

//TODO Update next dependency and update with new Link system

export declare type ALinkProps = LinkProps &
  Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "href"
  >;

const ALink = ({ href, children, className, style, ...props }: ALinkProps) => {
  return (
    <Link href={href} {...props}>
      <a style={style} className={className} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default ALink;
