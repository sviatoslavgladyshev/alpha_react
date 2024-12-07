const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.transformer.minifierPath = 'metro-minify-terser';
config.maxWorkers = 4; // Adjust based on your CPU cores

module.exports = config;