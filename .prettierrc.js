module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  // 在对象和数组的最后一个元素
  trailingComma: 'all',
  // 大括号中间的空格
  bracketSpacing: true,
  importOrderParserPlugins: ['jsx', 'js', 'ts', 'tsx'],
  importOrder: ['<THIRD_PARTY_MODULES>', `^@/(.*)$`, `^[(./|../)](.*)$`],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    'typescript',
    'classProperties',
    'decorators-legacy',
    'jsx',
  ],
};
