export const View = props => {
  CHECK_PROPS(props, propTypes, 'GitBadges')

  if (typeof props === 'string') {
    props = {
      project: props,
    }
  } else if (!props.project) {
    return
  }

  const { project = false, branch = 'master', host = 'github' } = props

  // this pattern allows capture of props that are set to false and intended to hide badges.
  // it will also make every undefined prop[serviceName] default to project
  const urls = [
    [
      'npm',
      (v = project) =>
        v && {
          to: `https://www.npmjs.com/package/@${v}`,
          src: `https://img.shields.io/npm/v/@${v}.svg`,
        },
    ],
    [
      'travis',
      (v = project) =>
        v && {
          to: `https://travis-ci.com/${v}`,
          src: `https://travis-ci.com/${v}.svg?branch=${branch}`,
        },
    ],
    [
      'appveyor',
      (v = project) => {
        if (v) {
          let [org, repo] = v.split('/')
          org = org.replace(/-/g, '')
          return {
            to: `https://ci.appveyor.com/project/${org}/${repo}/branch/${branch}`,
            src: `https://img.shields.io/appveyor/ci/${org}/${repo}/${branch}.svg`,
          }
        }
      },
    ],
    [
      'coveralls',
      (v = project) => ({
        to: `https://coveralls.io/${host}/${v}`,
        src: `https://img.shields.io/coveralls/${host}/${v}/${branch}.svg`,
      }),
    ],
    [
      'greenkeeper',
      (v = project) =>
        v && {
          to: `https://greenkeeper.io`,
          src: `https://badges.greenkeeper.io/${v}.svg`,
        },
    ],
    [
      'snyk',
      (v = project) =>
        v && {
          to: `https://snyk.io/test/${host}/${v}`,
          src: `https://img.shields.io/snyk/vulnerabilities/github/${v}.svg`,
          // src: `https://img.shields.io/snyk/vulnerabilities/npm/${v}.svg`,
        },
    ],
  ]
    .map(([name, fn]) => fn(props[name]))
    .filter(a => a.to && a.src)

  // no badges to show
  if (!urls.length) {
    return
  }

  return ul({ class: 'GitBadges' }, urls.map(({ to, src }) => li([Link({ to }, Img({ src }))])))
}

export const style = {
  '.GitBadges': {
    display: 'inline-block',

    li: {
      margin: `0 .5em 0 0`,
      display: 'inline-block',
      float: 'left',
    },
    img: {
      height: '20px',
    },
  },
}

export const propTypes = {
  GitBadges: [
    { type: 'string' },

    { key: 'project', type: 'string' },
    { key: 'host', type: 'string' },
    { key: 'npm', type: 'string' },
    { key: 'travis', type: 'string' },
    { key: 'coveralls', type: 'string' },
    { key: 'greenkeeper', type: 'string' },
    { key: 'appveyor', type: 'string' },
    { key: 'snyk', type: 'string' },
    { key: 'branch', type: 'string' },
  ],
}
