module.exports = {
  extends: ["turbo", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": ["warn"],
    "turbo/no-undeclared-env-vars": "off",
  },
}; 