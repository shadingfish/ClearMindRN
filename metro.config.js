// metro.config.js
// Must be CommonJS format rather than ESM

// const { getDefaultConfig } = require('expo/metro-config');
// const exclusionList = require('metro-config/src/defaults/exclusionList');

// const defaultConfig = getDefaultConfig(__dirname);

// module.exports = {
//   transformer: {
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//   },
//   resolver: {
//     // 去掉 svg 后缀，让 svg 文件单独由 react-native-svg-transformer 处理
//     assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
//     // 在 sourceExts 中加入 'svg' 扩展名，以便可以 import svg 文件
//     sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
//     blacklistRE: exclusionList([/node_modules\/.*\/node_modules\/.*/, /.*\/__tests__\/.*/, /\.expo\/.*/]),
//   },
// };

// const { getDefaultConfig } = require('expo/metro-config');

// module.exports = getDefaultConfig(__dirname);

// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// 移除svg扩展名，使得svg交由react-native-svg-transformer处理
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  ext => ext !== 'svg',
);

// 为svg文件添加特殊处理
defaultConfig.resolver.sourceExts.push('svg');

defaultConfig.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer',
);

module.exports = defaultConfig;
