
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Converted to typescript starter:  [xerebede/gridsome-starter-typescript](https://github.com/xerebede/gridsome-starter-typescript)
- Added `rel="noopener"` to social links per web.dev scoring
- Added alt text, in the form of svg title blocks, to social links
- Added theme-switcher from <gridsome.org>, with [css from vars.scss](https://github.com/gridsome/gridsome.org/blob/2d124ac9843dc39e782e91b6bcf54b21988835ee/src/assets/style/vars.scss)
- Added `vue-fontawesome` icons to Header

### Changed

- Moved static folder to `~/src/assets`
- Uncommented `.vscode` fro `.gitignore` to have cross machine settings.json (eslint preferences on save)
- Default to `'dark'` theme

### Removed

- Removed console loging from HelloService.sayHello("Gridsome") per web.dev scoring
- Removed `class="mx-auto sm:mx-0"` from `unDraw/developer.svg` per web.dev scoring

## [v0.6.1]

### Added

- Added mobile touch events using [vue2-touch-events](https://github.com/jerrybendy/vue-touch-events) per PR [#34](https://github.com/iancleary/personal-website/pull/34)
- Added alt-text and svg immediate loading per PR [#33](https://github.com/iancleary/personal-website/pull/33)
- Added navbar automatic hidding on scroll down, showing on scroll up, and opaque responsive on mobile per PR [#30](https://github.com/iancleary/personal-website/pull/30)

### Changed

- changed URL for [wiki rebrand](https://github.com/iancleary/wiki/pull/4), from dev-notes
- refactored navbar to components and fixed margin
- commented out scroll-to as it's a headache and not worth it
- Fixed changelog links

## [v0.6.0] - 2019-09-22

- Refactored to Gridsome Portfolio Starter per PR [#17](https://github.com/iancleary/personal-website/pull/17)
- Conception of the Changelog!

[Unreleased]: https://github.com/iancleary/personal-website/compare/v0.6.0...HEAD
[v0.6.1]: https://github.com/iancleary/personal-website/releases/tag/v0.6.1
[v0.6.0]: https://github.com/iancleary/personal-website/releases/tag/v0.6.0
