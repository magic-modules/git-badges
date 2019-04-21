const GitBadges = ({ npm, travis, appveyor = {}, coveralls, greenkeeper, branch = 'master' }) =>
  div({ class: `Badges` }, [
    npm && Link({ to: `https://www.npmjs.com/package/@${npm}`, }, Img({ src: `https://img.shields.io/npm/v/@${npm}.svg` })),
    travis && Link({ to: `https://travis-ci.org/${travis}` }, Img({ src: `https://travis-ci.com/${travis}.svg?branch=${branch}` })),
    appveyor.name && appveyor.id && Link({ to: `https://ci.appveyor.com/project/${appveyor.name}/branch/${branch}` }, Img({ src: `https://ci.appveyor.com/api/projects/status/${appveyor.id}/branch/${branch}?svg=true` })),
    coveralls && Link({ to: `https://coveralls.io/github/${coveralls}` }, Img({ src: `https://coveralls.io/repos/github/${coveralls}/badge.svg` })),
    greenkeeper && Link({ to: `https://greenkeeper.io` }, Img({ src: `https://badges.greenkeeper.io/${greenkeeper}.svg` })),
  ])

GitBadges.style = {
  '.Badges': {
    'a': {
      margin: `0 .5em 0 0`,
    },
  },
}

module.exports = GitBadges