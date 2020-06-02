module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  globals: {
    configOut: true,
    SetToken: true,
    L: true
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [ 'eslint:recommended', 'plugin:vue/essential' ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }], // 默认缩进两个空格，switch case缩进一个单位
    'quotes': ['error', 'single'], // 使用单引号
    'semi': ['error', 'always'], // 行尾加分号
    'eqeqeq': ['error', 'always'], // 只能用 === 或 !==
    'array-bracket-spacing': ['error'], // 数组的空格
    'space-infix-ops': ['error'], // 操作符的空格
    'space-before-blocks': ['error'], // 代码块的空格
    'space-before-function-paren': ['error', 'always'], // function的左括号之前使用一致的空格
    'no-console': ['error', { allow: ['error', 'warn'] }], // 禁用console，允许 error/warn
    'no-setter-return': 2, // setter 不允许有返回值
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }], // 检查所有声明，不检查参数
    'consistent-return': 2, // 要求 return 语句要么总是指定返回的值，要么不指定
    'default-case': 2, // 要求 switch 语句中有 default 分支
  }
};
