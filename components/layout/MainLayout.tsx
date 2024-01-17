import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const MainLayout = async ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"main">) => {
  return (
    <main
      className={twMerge(
        "min-h-screen bg-white text-black dark:bg-black dark:text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </main>
  );
};

export default MainLayout;
