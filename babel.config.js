module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['expo-router/babel'],
      [
        'module-resolver',
        {
          root:['./src'],
          alias: {
            '@assets':'./src/assets',
            '@components': './src/components',
            '@storage': './src/storage',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};
