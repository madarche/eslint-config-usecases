module.exports = {
    extends: ['usecases/usecase/lib/common',
        'usecases/usecase/lib/es2015', 'usecases/usecase/lib/es2017',
        'usecases/usecase/lib/vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    env: {
        browser: true,
        commonjs: false
    },
};
