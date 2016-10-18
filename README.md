eslint-config-usecases
======================

[![NPM version](http://img.shields.io/npm/v/eslint-config-usecases.svg)](https://www.npmjs.org/package/eslint-config-usecases)
[![Dependency Status](https://david-dm.org/madarche/eslint-config-usecases.svg)](https://david-dm.org/madarche/eslint-config-usecases)
[![devDependency Status](https://david-dm.org/madarche/eslint-config-usecases/dev-status.svg)](https://david-dm.org/madarche/eslint-config-usecases#info=devDependencies)
[![Build Status](https://travis-ci.org/madarche/eslint-config-usecases.svg?branch=master)](https://travis-ci.org/madarche/eslint-config-usecases)

ESLint configs by usecase

Those ESLint configs are presented around 3 use cases of JavaScript:

* JavaScript in Node.js applications (use this for Electron applications too)
  ([`usecases/usecase/nodejs`](./usecase/nodejs.js))
* JavaScript in the browsers
  ([`usecases/usecase/browser`](./usecase/browser.js))
* JavaScript in development code (including automated tests)
  ([`usecases/usecase/dev`](./usecase/dev.js))

All those usecases have their special `env` and `rules` set, while inheriting
[some common properties](./usecase/lib/common.js).


Usage
-----

In your project locally install the `eslint-config-usecases` package:

    $ npm install eslint-config-usecases --save-dev

Then add a file `.eslintrc.js` at the root of your project with the following content:

```javascript
module.exports = {
    extends: 'usecases/usecase/nodejs'
}
```

And you can change `usecases/usecase/nodejs` to the value of the corresponding
usecase.


Note that you can add many different `.eslintrc.js` files in the tree structure
of your project depending on  what is inside each directory.

For more information read [ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)


Note
----

Because JavaScript is more powerful, flexible and expressive, I prefer to use
JavaScript ESLint configuration files over JSON or YML. That's why there isn't
any `.eslintrc`, `.eslintrc.json` or `.eslintrc.yml` files.


Contributions
-------------

Those linting and style rules are the ones I use for the projects I work on, but
fill free to contribute if you have similar tastes.

So pull Requests and contributions in general are welcome
