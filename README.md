# ember-fork-me

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-fork-me.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-fork-me.svg)](https://badge.fury.io/js/ember-fork-me)
[![Build Status](https://travis-ci.org/kellyselden/ember-fork-me.svg?branch=master)](https://travis-ci.org/kellyselden/ember-fork-me)
![Ember Version](https://embadge.io/v1/badge.svg?start=1.13.0)

Ember component for "Fork me on GitHub" banner

Demo: https://kellyselden.github.io/ember-fork-me

Wraps [this](https://github.com/simonwhitaker/github-fork-ribbon-css) library

## Installation

```sh
ember install ember-fork-me
```

## Usage

```hbs
{{fork-me "https://github.com/my-user-name/my-repo"}}
```

## Options

* `url` - point to your repo
* `title` - change the default text
