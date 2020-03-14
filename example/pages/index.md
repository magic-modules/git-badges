# ${state.title}

this is the
[@magic-modules](https://github.com/magic-modules)
GitBadges component.

{{ state.description}}

## installation

`npm install @magic-modules/git-badges`

## usage

in a page/component, just pass the badge user/project string for those badges you want to show:

```
&lt;GitBadges
  // show all badges,
  // insert project into the various urls of the badges
  project="user/project"

  // optional if different to project above
  // every one of this arguments can be false to hide a badge
  npm="user/project" || false,
  travis="user/project" || false,
  coveralls="user/project" || false,
  appveyor="user/project" || false, // - will automatically be removed from the user.
  greenkeeper="user/project" || false,

  // optional, master is default value
  branch="master">
&lt;/GitBadges>
```

## gitlab / other git hosts

to use gitlab or any other git host in the urls that need a git host to be set,
simply pass a host prop to the GitBadges module

`<GitBadges project="gitlab-org/gitlab-repo" host="gitlab"></GitBadges>`

## demo

this demo also shows how to use npm @org/repository names.

`<GitBadges>@magic-modules/git-badges</GitBadges>`

renders

<GitBadges>@magic-modules/git-badges</GitBadges>

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/git-badges/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
