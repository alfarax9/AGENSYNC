import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "no-console": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "max-lines": ["error", { max: 150, skipBlankLines: true, skipComments: true }],
      "max-lines-per-function": ["error", { max: 40, skipBlankLines: true, skipComments: true }],
      "max-depth": ["error", 4],
      complexity: ["error", 10],
      "react/jsx-max-depth": ["error", { max: 4 }],
    },
  },
  // Third-party code is copied verbatim and never edited, so it is not linted;
  // the AMORA code that wraps it is.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "src/components/vendor/**"]),
]);

export default eslintConfig;
