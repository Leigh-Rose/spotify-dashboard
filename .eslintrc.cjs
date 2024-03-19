module.exports = {
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    jest: true,
    node: true,
    worker: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended", // this needs to be the ** last ** configuration
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "jsx-a11y",
    "import",
    "react",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",

    "import/default": "off",
    "import/namespace": "off",
    "import/no-unresolved": "off",
    "import/no-commonjs": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "never", // TODO: consider re-enabling this rule
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "~~/**",
            group: "external",
            position: "after",
          },
        ],
      },
    ],
    "import/prefer-default-export": "off",
    // See "Scenario 2": https://github.com/webpack/webpack/issues/520#issuecomment-331689542
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],

    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",

    "@typescript-eslint/no-var-requires": "off",

    "jest/no-done-callback": "off",
    "jest/expect-expect": "off",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "no-use-before-define": "off",
    // '@typescript-eslint/no-use-before-define': ['error'],

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error"],

    // most likely can stay turned off
    "no-useless-constructor": "off",
    "class-methods-use-this": "off",

    // TODO: consider enabling those in the future
    camelcase: "off",
    "consistent-return": "off",
    "no-irregular-whitespace": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "prefer-promise-reject-errors": "off",

    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "off",

    "import/no-cycle": "off",
    "import/no-named-as-default": "off",

    "jest/no-try-expect": "off",
    "jest/no-conditional-expect": "off",

    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-pascal-case": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["test/**", "**/utils/test/**", "**/utils/test-*/**"],
      rules: {
        "global-require": "off",
        "no-underscore-dangle": "off",

        "@typescript-eslint/no-empty-function": "off",
      },
    },
    {
      files: ["test/e2e/**"],
      rules: {
        "no-console": "off",
        "no-plusplus": "off",
        "no-await-in-loop": "off",
        "func-names": "off",
      },
    },
    {
      files: ["**/entries/workers/**"],
      rules: {
        "no-restricted-globals": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },

    react: {
      version: "detect",
      pragma: "React",
      fragment: "Fragment",
    },
  },
};
