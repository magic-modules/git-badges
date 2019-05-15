import { is } from '@magic/test'
import { GitBadges } from '../src/index.mjs'

export default [{ fn: () => GitBadges, expect: is.function, info: 'GitBadges is a function' }]
