import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "sbiqkq",  
  video: false,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
