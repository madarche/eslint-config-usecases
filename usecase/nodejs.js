module.exports = {
    extends: 'usecases/usecase/lib/common',
    env: {
        es6: true,
        node: true
    },
    rules: {
        //*** Programming best practices ***

        // Don't use "var", only use "let" and "const"
        'no-var': 'error',

        // Use "require" statements in the global scope context (eg. no
        // "require" statements inside functions, etc.)
        'global-require': 'error',

        // Use arrow functions instead of callbacks
        'prefer-arrow-callback': 'error',
        // Use parentheses around arrow function params even if empty
        'arrow-parens': 'error',

        // No Sync methods are they degrade perfs
        'no-sync': 'error',

        // Disallow string concatenation when using __dirname and __filename
        'no-path-concat': 'error'
    }
};
