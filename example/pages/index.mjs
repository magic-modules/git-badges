export const View = state => [
  h1(state.title),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' GitBadges component. ',
    state.description,
  ]),

  h2({ id: 'installation' }, 'installation'),
  Pre(`npm install @magic-modules/git-badges`),

  h2({ id: 'usage' }, 'usage'),
  p(
    'in a page/component, just pass the badge user/project string for those badges you want to show:',
  ),
  Pre(`
GitBadges({
  // show all badges,
  // insert project into the various urls of the badges
  project: 'user/project',

  // optional if different to project above
  // every one of this arguments can be false to hide a badge
  npm: 'user/project' || false,
  travis: 'user/project' || false,
  coveralls: 'user/project' || false,
  appveyor: 'user/project' || false, // - will automatically be removed from the user (appveyor needs that)
  greenkeeper: 'user/project' || false,

  // optional, master is default value
  branch: 'master',
})
`),

  h2('gitlab / other git hosts'),
  p([
    'to use gitlab or any other git host in the urls that need a git host to be set,',
    ' simply pass a host prop to the GitBadges module',
  ]),
  Pre("GitBages({ project: 'gitlab-org/gitlab-repo', host: 'gitlab' })"),

  h2({ id: 'demo' }, 'demo'),
  Pre("GitBadges('magic-modules/git-badges')"),
  p('renders'),
  GitBadges('magic-modules/git-badges'),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/git-badges/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
