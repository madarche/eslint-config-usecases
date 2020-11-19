module.exports = {
    extends: ['usecases/usecase/lib/common',
        'usecases/usecase/lib/es2015', 'usecases/usecase/lib/es2017'],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'script'
    },
    env: {
        es2017: true,
        node: true
    },
    rules: {
        //*** Programming best practices ***

        'no-process-exit': 'error',

        // Use "require" statements in the global scope context (eg. no
        // "require" statements inside functions, etc.)
        'global-require': 'error',

        // Use Buffer.from, Buffer.alloc, and Buffer.allocUnsafe instead of the
        // Buffer constructor (security vulnerabilities).
        'no-buffer-constructor': 'error',

        // No Sync methods are they degrade perfs
        'no-sync': 'error',

        // Disallow string concatenation when using __dirname and __filename
        'no-path-concat': 'error',

        // Enforce Callback Error Handling
        'handle-callback-err': 'error',
    },
};
