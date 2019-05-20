import { is } from '@magic/test'

import * as GitBadges from '../src/index.mjs'

export default [{ fn: () => GitBadges.View, expect: is.fn, info: 'GitBadges.View is a function' }]
