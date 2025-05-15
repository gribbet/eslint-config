import jsLint from "@eslint/js";
import importLint from "eslint-plugin-import";
import prettierLintRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSortLint from "eslint-plugin-simple-import-sort";
import unusedImportsLint from "eslint-plugin-unused-imports";
import tsLint from "typescript-eslint";

export default tsLint.config(
  {
    ignores: ["eslint.config.mjs"],
  },
  jsLint.configs.recommended,
  tsLint.configs.recommendedTypeChecked,
  importLint.flatConfigs.recommended,
  importLint.flatConfigs.typescript,
  importLint.flatConfigs.react,
  prettierLintRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSortLint,
      "unused-imports": unusedImportsLint,
    },

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },

    rules: {
      "arrow-body-style": ["error", "as-needed"],
      curly: ["error", "multi"],
      eqeqeq: "error",
      "func-style": ["error", "expression"],
      "no-constant-condition": "off",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ClassDeclaration",
        },
      ],
      "no-unused-vars": "warn",
      "no-useless-rename": "error",
      "object-shorthand": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-destructuring": "error",
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      "require-await": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["variable", "function"],
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unnecessary-condition": [
        "error",
        { allowConstantLoopConditions: true },
      ],
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-enum-comparison": "error",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowTaggedTemplates: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/only-throw-error": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "import/namespace": "off",
      "import/no-named-as-default": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unused-imports/no-unused-imports": "error",
    },
  }
);
