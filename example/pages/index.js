module.exports = () =>
  div([
    h1('@magic-modules/gitbadges'),
    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
      ' GitBadges component. It shows a list of git badges for your projects.',
    ]),

    h2('installation:'),
    p(
      'installation is done using npm. for now, all magic modules are living on github and not on npm.',
    ),
    p('note the missing @ before magic-modules.'),
    p('this is how we install npm modules from github.'),
    Pre.View(`npm install magic-modules/gitbadges`),

      h2('require:'),
      p('first add the component to the assets'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  GitBadges: require('@magic-modules/gitbadges'),
}`),
      h2('usage:'),
      p('in a page/component, just pass the badge user/project string for those badges you want to show:'),
      Pre.View(`
GitBadges({
  travis: 'magic-modules/gitbadges',
  npm: 'magic-modules/gitbadges',
  coveralls: 'magic-modules/gitbadges',
  appveyor: { name: 'jaeh/gitbadges', id: '' },
  greenkeeper: 'magic-modules/gitbadges',

  // optional
  branch: 'master',
})
`),
    p('renders'),
    GitBadges({
      travis: 'magic-modules/gitbadges',
      npm: 'magic-modules/gitbadges',
      coveralls: 'magic-modules/gitbadges',
      appveyor: { name: 'jaeh/gitbadges', id: '' },
      greenkeeper: 'magic-modules/gitbadges',

      // optional
      branch: 'master',
    })
  ])

