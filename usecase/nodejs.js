module.exports = {
    extends: ['usecases/usecase/lib/common','usecases/usecase/lib/es2015'],
    env: {
        es6: true,
        node: true
    },
    rules: {
        //*** Programming best practices ***

        // Use "require" statements in the global scope context (eg. no
        // "require" statements inside functions, etc.)
        'global-require': 'error',

        // No Sync methods are they degrade perfs
        'no-sync': 'error',

        // Disallow string concatenation when using __dirname and __filename
        'no-path-concat': 'error'
    }
};
