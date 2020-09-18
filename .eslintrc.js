module.exports = {
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/essential',  //这行起作用 error  Parsing error: Unexpected token <
        '@vue/typescript/recommended', //Parsing error: Unexpected character '@'
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'camelcase': [0, {properties: 'always'}],
        'vue/no-parsing-error': [2, {"x-invalid-end-tag": false}],
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/prefer-for-of": 0,
        "@typescript-eslint/no-namespace": 0,
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-use-before-define": 0,
    }

}
