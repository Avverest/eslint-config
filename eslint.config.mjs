import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      "no-self-assign": ["error", {"props": true}],
      "no-self-compare": "error",
      "camelcase": "always",
      "guard-for-in": "error",
      "id-length": ["error", { properties: "never", min: 4, max: 10 }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-empty-function": "error",
      "no-magic-numbers": ["error", { "ignore": [1], "ignoreArrayIndexes": true }],
      "no-multi-str": "error",
      "no-redeclare": "error",
      "no-shadow": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "sort-imports": "warn",
      "sort-keys": "warn",
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
