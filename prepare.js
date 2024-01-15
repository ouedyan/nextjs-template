// https://typicode.github.io/husky/guide.html#with-a-custom-script

const isCiOrProd =
  process.env.CI !== undefined || process.env.NODE_ENV === "production";
if (!isCiOrProd) {
  require("husky").install();
}
