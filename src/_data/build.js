const pkg = require('../../package.json')
module.exports = {
  env: process.env.npm_command === 'start' ? 'dev' : 'production',
  package: pkg,
  release: `${pkg.name}@${pkg.version}`,
}
