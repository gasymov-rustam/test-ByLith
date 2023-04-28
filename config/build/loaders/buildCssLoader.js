const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildCssLoader = (isDev) => ({
  test: /\.(s[ac]|c)ss$/i,
  exclude: /node_modules/,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath) => Boolean(resPath.includes('.module.')),
          localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});

module.exports = { buildCssLoader };
