import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const MainLayout = async ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "min-h-screen bg-white text-black dark:bg-black dark:text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MainLayout;
