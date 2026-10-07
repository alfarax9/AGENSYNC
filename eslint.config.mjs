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
  {
    // Third-party code copied verbatim; size limits apply only to code AMORA owns.
    files: ["src/components/vendor/**"],
    rules: {
      "max-lines": "off",
      "max-lines-per-function": "off",
      "max-depth": "off",
      complexity: "off",
      "react/jsx-max-depth": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
