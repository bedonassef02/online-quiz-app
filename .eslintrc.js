module.exports = {
  env: {
    node: true, // Specifies the environment to be Node.js
    es2021: true, // Specifies the ECMAScript version to be ES2021
  },
  extends: [
    'eslint:recommended', // Uses the recommended rules from ESLint
  ],
  parserOptions: {
    ecmaVersion: 12, // Specifies the ECMAScript version to be ES2021
    sourceType: 'module', // Allows the use of import/export statements
  },
  rules: {
    'no-unused-vars': 'warn', // Warns about unused variables
    // Add or remove rules as needed for your project
  },
};
