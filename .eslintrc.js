module.exports = {
    extends: 'eslint:recommended',
    env: {
        commonjs: true,
        es6: true
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        'no-multiple-empty-lines': ['error', {max: 1}],
        'no-trailing-spaces': 'error',
    }
};
