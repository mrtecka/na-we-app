// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
// module.exports = (() => {
//   const config = getDefaultConfig(__dirname);

//   const { transformer, resolver } = config;

//   config.transformer = {
//     ...transformer,
//     babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
//   };
//   config.resolver = {
//     ...resolver,
//     assetExts: [
//       resolver.assetExts.push("cjs"),
//       resolver.assetExts.filter((ext) => ext !== "svg"),
//     ],
//     // assetExts: resolver.assetExts.push("cjs"),
//     sourceExts: [...resolver.sourceExts, "svg"],
//   };

//   return config;
// })();

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;
