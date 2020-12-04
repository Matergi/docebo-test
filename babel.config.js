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
          types: './src/AppState/types',
          stateUpdaters: './src/StateUpdaters',
          sagaEffects: './src/SagaEffects',
          reducer: './src/AppState/reducer',
          dimensions: './src/Resources/Dimensions',
          images: './src/Resources/Images',
          themes: './src/Resources/Themes',
        },
      },
    ],
    'babel-plugin-inline-import',
  ],
};
