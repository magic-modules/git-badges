const { is } = require('@magic/test')
const GitBadges = require('../src')

module.exports = [
  { fn: () => GitBadges, expect: is.function, info: 'GitBadges is a function' },
]