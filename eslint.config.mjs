import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  eslintPluginPrettierRecommended,
);
