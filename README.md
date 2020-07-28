eslint-config-usecases
======================

[![NPM version](http://img.shields.io/npm/v/eslint-config-usecases.svg)](https://www.npmjs.org/package/eslint-config-usecases)
[![Build Status](https://travis-ci.org/madarche/eslint-config-usecases.svg?branch=master)](https://travis-ci.org/madarche/eslint-config-usecases)

ESLint configs by usecase with a strong bias towards quality, strictness and the
decision to ban useless semicolons (`;`) for legibility and efficiency
(cf. [the "semi" never rule](http://eslint.org/docs/rules/semi)).

Those ESLint configs are devised around some specific use cases of JavaScript:

* ([`usecases/usecase/nodejs`](./usecase/nodejs.js)):
  JavaScript for Node.js applications (and thus including Electron applications)

* ([`usecases/usecase/browser-vue`](./usecase/browser-vue.js)):
  JavaScript for browsers for Vue.js applications

* ([`usecases/usecase/browser-commonjs`](./usecase/browser-commonjs.js)):
  JavaScript for browsers using CommonJS through the build of a bundle
  (with Browserify/WebPack)

* ([`usecases/usecase/browser-modern`](./usecase/browser-modern.js)):
  JavaScript for modern browsers with support for ES2015 and up

* ([`usecases/usecase/browser`](./usecase/browser.js)):
  JavaScript for all browsers even old

* ([`usecases/usecase/test-jest`](./usecase/test-jest.js)):
  Tests with Jest

* ([`usecases/usecase/test-mocha`](./usecase/test-mocha.js)):
  Tests with Mocha

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

Those use cases are focusing only on some needs on purpose. Exhaustiveness is
not intended. Feel free to contribute if you have similar needs.
