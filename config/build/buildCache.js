const { name } = require('../../package.json');

const buildCache = ({ isDev }) => {
  if (!isDev) {
    return;
  }

  return {
    type: 'filesystem',
    name: `${name}Cache`,
  };
};

module.exports = { buildCache };
