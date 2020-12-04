module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          elements: './src/UI/Elements',
          screens: './src/UI/Screens',
          router: './src/Router',
          dependencies: './src/Dependencies',
        },
      },
    ],
  ],
};
