module.exports = {
    extends: 'eslint:recommended',
    env: {
        'shared-node-browser': true
    },
    rules: {
        //*** Programming best practices ***

        semi: ['error', 'never'],
        strict: ['error', 'global'],
        'no-array-constructor': ['error'],

        'no-unused-vars': ['error', {args: 'none'}],

        // No dead code
        'no-unreachable': 'error',

        // Take full advantage of JavaScript flexibility by being able, in a
        // function, to return different types (for exemple sometimes a boolean
        // and sometimes an object).
        'consistent-return': 'off',

        // Switch-case best practices
        'default-case': 'error',
        'no-fallthrough': 'error',
        'no-case-declarations': 'error',

        'no-console': 'error',

        //*** Presentation style ***

        indent: ['error', 4],
        quotes: ['error', 'single', {avoidEscape: true}],
        'quote-props': ['error', 'as-needed'],

        // Use snake_case for variable names and camelCase for function names
        camelcase: 'off',

        'new-cap': 'error',

        'no-multiple-empty-lines': ['error', {max: 2}],
        'no-trailing-spaces': 'error',
        'comma-spacing': ['error', {before: false, after: true}],
        'space-in-parens': ['error', 'never'],
        'keyword-spacing': 'error',
        'space-before-blocks': 'error',
        'space-infix-ops': 'error',
        'space-before-function-paren': ['error', 'never'],
        'no-spaced-func': 'error',
        'no-multi-spaces': 'error',
        'space-unary-ops': 'error',
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs'],
        curly: ['error', 'all']
    }
};
