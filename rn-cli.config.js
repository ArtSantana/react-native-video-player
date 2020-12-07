module.exports = {
  project: {
    android: {
      sourceDir: './example/',
    },
  },

  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },

  getSourceExts() {
    return ['ts', 'tsx'];
  },
};
