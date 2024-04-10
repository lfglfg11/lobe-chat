const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: 'locales/zh-CN',
  entryLocale: 'zh-CN',
  output: 'locales',
  outputLocales: [
    'ar',
    'bg-BG',
    'zh-TW',
    'en-US',
    'ru-RU',
    'ja-JP',
    'ko-KR',
    'fr-FR',
    'tr-TR',
    'es-ES',
    'pt-BR',
    'de-DE',
    'it-IT',
    'nl-NL',
    'pl-PL',
    'vi-VN',
  ],
  temperature: 0,
<<<<<<< Updated upstream
  modelName: 'gpt-3.5-turbo-0125',
=======
  modelName: 'gpt-3.5-turbo-1106',
>>>>>>> Stashed changes
  splitToken: 1024,
  experimental: {
    jsonMode: true,
  },
<<<<<<< Updated upstream
  reference:
    'You need to maintain the component format of MDX, and the output text does not need to be wrapped in any code block syntax at the outermost level.',
  markdown: {
    entry: ['./README.zh-CN.md', './contributing/**/*.zh-CN.md', './docs/**/*.zh-CN.mdx'],
=======
  reference: '你需要保持 mdx 的组件格式，输出文本不需要在最外层包裹任何代码块语法',
  markdown: {
    entry: ['./README.zh-CN.md', './docs/**/*.zh-CN.md', './docs/**/*.zh-CN.mdx'],
>>>>>>> Stashed changes
    entryLocale: 'zh-CN',
    entryExtension: '.zh-CN.md',
    entryExtension: '.zh-CN.md',
    outputLocales: ['en-US'],
    outputExtensions: (locale, { getDefaultExtension }) => {
      if (locale === 'en-US') return '.md';
      return getDefaultExtension(locale);
    outputExtensions: (locale, { getDefaultExtension }) => {
      if (locale === 'en-US') return '.md';
      return getDefaultExtension(locale);
    },
  },
});
