import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unused variables if prefixed with an underscore
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // Disable warnings for unescaped entities in JSX
      "react/no-unescaped-entities": "off",

      // Disable warnings for using custom fonts in `_document.tsx`
      "@next/next/no-page-custom-font": "off",

      // Suppress ESLint errors related to prop spreading in Next.js
      "react/jsx-props-no-spreading": "off",

      // Suppress missing dependencies warning in useEffect (useful when you're sure dependencies are fine)
      "react-hooks/exhaustive-deps": "off",

      // Allow console logs, but warn instead of error
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Allow unused imports (remove this if you want strict linting)
      "unused-imports/no-unused-imports": "off",
    },
  },
];

export default eslintConfig;
