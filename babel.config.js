module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@screens': './screens',
            '@styles': './styles',
            '@constants': './constants',
            '@routes': "./routes",
            '@models': "./models",
            '@components': "./components",
            '@store': "./store",
            '@svg': "./assets/svg",
            '@fonts': './fonts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};