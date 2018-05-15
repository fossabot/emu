const paths = require('path');
const fs = require('fs');

const appRoot = fs.realpathSync(process.cwd());
const resolveApp = relativePath => paths.resolve(appRoot, relativePath);

module.exports = {
  appRoot,
  appSrc: resolveApp('src'),
};
