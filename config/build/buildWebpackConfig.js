const { buildCache } = require('./buildCache.js');
const { buildDevServer } = require('./buildDevServer.js');
const { moduleBuildLoaders } = require('./buildLoaders.js');
const { buildPlugins } = require('./buildPlugins.js');
const { buildResolvers } = require('./buildResolvers.js');

const buildWebpackConfig = (options) => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    performance: {
      hints: false,
    },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    cache: buildCache(options),
    plugins: buildPlugins(options),
    module: moduleBuildLoaders(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};

module.exports = { buildWebpackConfig };
