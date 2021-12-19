import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript(), babel({ extensions: [".ts"] })],
  },

  // UMD
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.umd.min.js",
      format: "umd",
      name: "sxs-last-try",
      indent: false,
    },
    plugins: [
      typescript(),
      babel({ extensions: [".ts"], exclude: "node_modules/**" }),
      terser(),
    ],
  },
];
