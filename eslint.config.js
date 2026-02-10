import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      "react-native": reactNative,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parser: babelParser,
      globals: {
        ...reactNative.environments["react-native"].globals,
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];