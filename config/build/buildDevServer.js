const buildDevServer = ({ port, isOpen }) => ({
  port,
  open: isOpen,
  historyApiFallback: true,
  hot: true,
});

module.exports = { buildDevServer };
