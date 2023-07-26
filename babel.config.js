module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel',
      ['module-resolver', {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@slices': './src/store/slices',
          '@services': './src/services',
          '@utils': './src/utils',
          '@schemas': './src/validationSchemas'
        },
      }],
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      }],
    ],
  }
}
