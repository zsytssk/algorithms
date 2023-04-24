module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    jsx: true,
    ecmaVersion: 6,
    project: './tsconfig.json',
  },
  rules: {
    // -- 禁用 start
    'arrow-body-style': 'off',
    '@typescript-eslint/consistent-type-imports': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/switch-exhaustiveness-check': 0,
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/method-signature-style': 0,
    'react/no-children-prop': 0,
    'no-empty': 'warn',
    'no-return-assign': 0,
    'no-confusing-arrow': 0,
    'react/no-array-index-key': 0,
    'no-console': 0,
    'max-len': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-extra-boolean-cast': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'react/self-closing-comp': 0,
    // -- 禁用end

    // 函数前空格
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    // 对代码中的debugger做warning提示
    'no-debugger': 1,
    // 禁止使用var
    'no-var': 'error',
    // 禁用拖尾逗号
    'comma-dangle': 0,
    // 禁止出现多个空格
    'no-multi-spaces': 'error',
    // 强制关键字周围空格的一致性
    'keyword-spacing': ['error', { after: true }],
    // 强制在对象字面量的键和值之前使用一致的空格
    'key-spacing': ['error', { beforeColon: false }],
    // 强制箭头函数之前的空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 强制块之前的空格的一致性。它只在非行首的块上起作用
    'space-before-blocks': ['error', 'always'],
    // 确保中缀运算符周围有空格
    'space-infix-ops': ['error', { int32Hint: true }],
    // 强制在逗号周围使用空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 强制使用一致的缩进: 因为某些地方和prettier无法配合 关闭
    // indent: ['error', 2, { SwitchCase: 1 }],
    // 警告 Array<T>，优先使用 string[]
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    // 禁止未使用过的变量
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    // 在申明前使用
    '@typescript-eslint/no-use-before-define': 'warn',
    // hooks的规则
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 默认使用const而不是let
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    // 文件最大行数 [投票关闭]
    // 'max-lines': [
    //   'warn',
    //   {
    //     max: 300,
    //     skipBlankLines: true,
    //     skipComments: true,
    //   },
    // ],
    // 函数最大参数
    'max-params': [
      'warn',
      {
        max: 3,
      },
    ],
  },
};
