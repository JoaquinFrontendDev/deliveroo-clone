module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel',
      ['module-resolver', {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './components',
          '@hooks': './hooks',
          '@constants': './constants',
          '@screens': './screens',
          '@assets': './assets',
          '@slices': './slices',
          '@services': './services',
          '@utils': './utils',
          '@schemas': './validationSchemas'
        },
      }]],
  }
}
