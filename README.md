# clean-deps

Clean :shower: all node dependencies i.e. node_modules

- :dolls: Works fantastically with mono-repos
- :leftwards_arrow_with_hook: can be hooked with [CLI](#CLI)
- :package: use as a [module](#modules) to get all node_modules dirs

## Install

CLI

`npm i clean-deps -g`

or

Module

`npm i clean-deps`

## Usage

### CLI

Add as an npm-script

```js
{
  "clean-deps": "clean-deps"
}
```

### Modules

```js
const findDirs = require("clean-deps");

const results = findDirs();
```
