const buildBabelLoader = ({ isDev, isTsx }) => ({
  test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-runtime', isDev && require.resolve('react-refresh/babel')].filter(Boolean),
    },
  },
});

module.exports = { buildBabelLoader };
