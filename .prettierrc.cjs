module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  trailingComma: 'none', // 代码末尾不需要逗号
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200
      }
    }
  ],
  arrowParens: 'always'
}
