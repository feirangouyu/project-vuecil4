module.exports = {
  root: true,
  // 引入全局变量(浏览器、node、es6)
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // @babel/eslint-parser将不能被常规linter解析的代码转换为能被常规解析的代码
  parserOptions: {
    // parser: '@babel/eslint-parser',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  // 扩展配置文件(启用报告常见问题的核心规则子集、vue插件包、prettier设置覆盖eslint)
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false, // 句尾分号
        useTabs: false, // 制表符缩进
        singleQuote: true, // 使用 ''
        trailingComma: 'es5', // 使用ES5 中有效的尾随逗号
        endOfLine: 'lf', // 非空行下一行换行
        tabWidth: 2, // 缩进
      },
    ],
  },
}
