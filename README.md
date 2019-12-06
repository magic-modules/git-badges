## @magic-modules/git-badges

git badges for your [@magic](https://magic.github.com/core) project.

[html docs / demo](https://magic-modules.github.io/git-badges)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/git-badges.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/git-badges
[travis-image]: https://img.shields.io/travis/com/magic-modules/git-badges/master
[travis-url]: https://travis-ci.com/magic-modules/git-badges
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/git-badges/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/git-badges/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/git-badges/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/git-badges
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/git-badges.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/git-badges.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/git-badges/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/git-badges

#### install:
```bash
npm install --save-exact @magic-modules/git-badges
```

#### usage:
```javascript
// in any component view
const component = {
  View: () => GitBadges({
    // shows npm, travis, coveralls appveyor and greenkeeper badges with this project
    project: 'user/project',

    // optional
    // (use if url to badge for one service is different to project above)
    // every one of this arguments can be false to hide a certain badge
    npm: 'user/project' || false,
    travis: 'user/project' || false,
    coveralls: 'user/project' || false,
    appveyor: 'user/project' || false,
    greenkeeper: 'user/project' || false,

    // optional, master is default value
    branch: 'master',
  }),
}
```

#### changelog

##### 0.0.1
first commit

##### 0.0.2
use @magic npm packages instead of github for installs
