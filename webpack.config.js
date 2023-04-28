const path = require('path');
const { buildWebpackConfig } = require('./config/index.js');

module.exports = (env) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode ?? 'development';
  const isDev = mode === 'development';
  const PORT = env.port ?? 3000;
  const isOpen = true;

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    isOpen,
    port: PORT,
  });

  return config;
};
