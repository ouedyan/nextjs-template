import type { NextPage } from "next";
import Card from "@/components/Card";
import VercelSVG from "@/public/icons/vercel.svg";
import clsx from "clsx";

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-16">
        <h1 className="m-0 text-center text-[4rem] leading-[1.15]">
          Welcome to{" "}
          <a
            className="text-[#0070f3] [text-decoration:none] hover:underline focus:underline active:underline"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="my-16 text-center text-[1.5rem] leading-[1.5]">
          Get started by editing{" "}
          <code
            className={clsx(
              "rounded-[5px] bg-[#fafafa] p-3 text-[1.1rem] dark:bg-[#111]",
              "font-[Menlo,_Monaco,_'Lucida_Console','Liberation_Mono',_'DejaVu_Sans_Mono',_'Bitstream_Vera_Sans_Mono',_'Courier_New',_monospace]"
            )}
          >
            pages/index.tsx
          </code>
        </p>

        <div className="flex w-full max-w-[800px] flex-col flex-wrap items-center justify-center sm:w-auto sm:flex-row">
          <Card
            href="https://nextjs.org/docs"
            title="Documentation &rarr;"
            content="Find in-depth information about Next.js features and API."
          />
          <Card
            href="https://nextjs.org/learn"
            title="Learn &rarr;"
            content="Learn about Next.js in an interactive course with quizzes!"
          />
          <Card
            href="https://github.com/vercel/next.js/tree/canary/examples"
            title="Examples &rarr;"
            content="Discover and deploy boilerplate example Next.js projects."
          />
          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy &rarr;"
            content="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className="flex flex-1 items-center justify-center border-t border-solid border-t-[#eaeaea] py-8 dark:border-[#222]">
        <a
          className="flex grow items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2 h-4">
            <VercelSVG
              className="dark:invert"
              width={72}
              height={16}
              alt="Vercel Logo"
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
