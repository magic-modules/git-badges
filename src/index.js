const GitBadges = props => {
  const { project = false } = props
  const {
    npm = project,
    travis = project,
    appveyor = project,
    coveralls = project,
    greenkeeper = project,
    branch = 'master',
  } = props

  // show nothing if no badges could be shown anyways
  if (!project && !npm && !travis && !appveyor && !coveralls && !greenkeeper) {
    return
  }

  const GitBadge = ({ to, src }) => li([Link({ to }, Img({ src: src }))])

  return ul({ class: 'GitBadges' }, [
    npm &&
      GitBadge({
        to: `https://www.npmjs.com/package/@${npm}`,
        src: `https://img.shields.io/npm/v/@${npm}.svg`,
      }),
    travis &&
      GitBadge({
        to: `https://travis-ci.com/${travis}`,
        src: `https://travis-ci.com/${travis}.svg?branch=${branch}`,
      }),
    appveyor &&
      GitBadge({
        to: `https://ci.appveyor.com/project/${appveyor}/branch/${branch}`,
        src: `https://img.shields.io/appveyor/ci/${appveyor}/${branch}.svg`,
      }),
    coveralls &&
      GitBadge({
        to: `https://coveralls.io/github/${coveralls}`,
        src: `https://coveralls.io/repos/github/${coveralls}/badge.svg`,
      }),
    greenkeeper &&
      GitBadge({
        to: `https://greenkeeper.io`,
        src: `https://badges.greenkeeper.io/${greenkeeper}.svg`,
      }),
  ])
}

GitBadges.style = {
  '.GitBadges': {
    display: 'inline-block',

    li: {
      margin: `0 .5em 0 0`,
      display: 'inline-block',
      float: 'left',
    },
  },
}

module.exports = GitBadges
