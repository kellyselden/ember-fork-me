ember-fork-me
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-fork-me.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-fork-me.svg)](https://badge.fury.io/js/ember-fork-me)
[![Build Status](https://travis-ci.org/kellyselden/ember-fork-me.svg?branch=master)](https://travis-ci.org/kellyselden/ember-fork-me)
[![Ember Version](https://img.shields.io/badge/ember-2.12%2B-brightgreen.svg)](https://www.emberjs.com/)

Ember component for "Fork me on GitHub" banner

Demo: https://kellyselden.github.io/ember-fork-me

Wraps [this](https://github.com/simonwhitaker/github-fork-ribbon-css) library

Installation
------------------------------------------------------------------------------

```
ember install ember-fork-me
```


Usage
------------------------------------------------------------------------------

```hbs
{{fork-me "https://github.com/my-user-name/my-repo"}}
```

## Options

* `url` - point to your repo
* `title` - change the default text


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-fork-me`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
