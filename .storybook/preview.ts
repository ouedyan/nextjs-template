import "../styles/globals.scss";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // next/navigation in app dir.
    // See https://storybook.js.org/docs/8.0/get-started/nextjs#set-nextjsappdirectory-to-true
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
