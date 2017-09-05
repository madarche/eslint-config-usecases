eslint-config-usecases
======================

[![NPM version](http://img.shields.io/npm/v/eslint-config-usecases.svg)](https://www.npmjs.org/package/eslint-config-usecases)
[![Dependency Status](https://david-dm.org/madarche/eslint-config-usecases.svg)](https://david-dm.org/madarche/eslint-config-usecases)
[![devDependency Status](https://david-dm.org/madarche/eslint-config-usecases/dev-status.svg)](https://david-dm.org/madarche/eslint-config-usecases#info=devDependencies)
[![Build Status](https://travis-ci.org/madarche/eslint-config-usecases.svg?branch=master)](https://travis-ci.org/madarche/eslint-config-usecases)

ESLint configs by usecase with a strong bias towards quality, strictness and the
decision to ban useless semicolons (`;`) for legibility and efficiency
(cf. [the "semi" never rule](http://eslint.org/docs/rules/semi)).

Those ESLint configs are presented around the following use cases of JavaScript:

* JavaScript in Node.js applications (use this for Electron applications too)
  ([`usecases/usecase/nodejs`](./usecase/nodejs.js))
* JavaScript in browsers
  ([`usecases/usecase/browser`](./usecase/browser.js))
* JavaScript in browsers using CommonJS (typically using Browserify/WebPack)
  ([`usecases/usecase/browser-commonjs`](./usecase/browser-commonjs.js))
* JavaScript in development code (including automated tests)
  ([`usecases/usecase/dev`](./usecase/dev.js))

All those usecases have their special `env` and `rules` set, while inheriting
[some common properties](./usecase/lib/common.js).


Usage
-----

If not already present, install the `eslint` package locally in your project:

    $ npm install eslint --save-dev

Then, still in your project, locally install the `eslint-config-usecases`
package:

    $ npm install eslint-config-usecases --save-dev

And finally, you have to add an `.eslintrc.js` file at the root of your project
with the following content:

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
feel free to contribute if you have similar tastes.

So pull Requests and contributions in general are welcome
