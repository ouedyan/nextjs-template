import * as React from "react";
import { Button as AriakitButton } from "@ariakit/react";
import { cva, type VariantProps } from "class-variance-authority";
import Spinner from "@/public/icons/spinner.svg";

import { cn } from "@/components/utils";
import clsx from "clsx";

export const buttonVariants = cva(
  [
    "flex select-none items-center justify-center gap-3 whitespace-nowrap rounded-lg border-none px-4 py-2.5",
    "text-base no-underline",
    "shadow-[inset_0_0_0_1px_var(--border),inset_0_2px_0_var(--highlight),inset_0_-1px_0_var(--shadow),0_1px_1px_var(--shadow)]",
    "outline-2 outline-offset-2",
    "aria-disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-600/90",
        secondary: "bg-white hover:bg-blue-600/10",
        destructive: "bg-red-600 text-white hover:bg-red-600/90",
        ghost: "hover:bg-blue-600/40",
        outline: "border border-blue-600 hover:bg-blue-600/10",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof AriakitButton>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = React.forwardRef<
  React.ElementRef<typeof AriakitButton>,
  ButtonProps
>(function Button(
  { className, variant = "primary", isLoading = false, children, ...rest },
  ref,
) {
  return (
    <AriakitButton
      ref={ref}
      className={cn(buttonVariants({ className, variant }))}
      {...rest}
    >
      {isLoading ? <Spinner className="animate-spin" /> : children}
    </AriakitButton>
  );
});

export default Button;
