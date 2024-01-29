import clsx from "clsx";
import Card from "@/components/common/Card";
import NextImage from "@/components/NextImage";
import Link from "next/link";
import { getI18n } from "@/i18n/server";
import { Metadata, ResolvingMetadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { generatePageMetadata } from "@/components/utils";
import VercelSvg from "@/public/icons/vercel.svg";
// @ts-ignore
import nextJsSvg from "@/public/icons/next.svg?url";

export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const t = await getI18n();

  return await generatePageMetadata({ title: t("home.homepage") }, parent);
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();

  return (
    <div
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between p-24",
        "[background:linear-gradient(to_bottom,transparent,white)_rgb(214,219,220)]",
        "dark:[background:linear-gradient(to_bottom,transparent,black)_black]",
      )}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          className={clsx(
            "fixed left-0 top-0 flex w-full justify-center pb-6 pt-8",
            "border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl",
            "dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit",
            "lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",
          )}
        >
          <Link href="/login">Get started by editing&nbsp;</Link>
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div
          className={clsx(
            "fixed bottom-0 left-0 flex h-48 w-full items-end justify-center",
            "bg-gradient-to-t from-white via-white",
            "dark:from-black dark:via-black",
            "lg:static lg:h-auto lg:w-auto lg:bg-none",
          )}
        >
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <VercelSvg className="h-[24px] w-[100px] dark:invert" />
          </a>
        </div>
      </div>

      <div
        className={clsx(
          "relative flex place-items-center",
          [
            "before:absolute before:z-10 before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:content-[''] before:lg:h-[360px]",
            "before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl",
            "before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10",
          ],
          [
            "after:absolute after:z-0 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:content-['']",
            "after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl",
            "after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40",
          ],
        )}
      >
        <NextImage
          src={nextJsSvg}
          alt="Next.js Logo"
          className="relative z-20 h-[37px] w-[180px] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          nextImageClassName="object-contain"
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Card
          title="Docs"
          content="Find in-depth information about Next.js features and API."
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />

        <Card
          title="Learn"
          content="Learn about Next.js in an interactive course with&nbsp;quizzes!"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        />

        <Card
          title="Templates"
          content="Explore starter templates for Next.js."
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />

        <Card
          title="Deploy"
          content="Instantly deploy your Next.js site to a shareable URL with Vercel."
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />
      </div>
    </div>
  );
}
