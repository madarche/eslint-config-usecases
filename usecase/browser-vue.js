module.exports = {
    extends: ['usecases/usecase/lib/common','usecases/usecase/lib/es2015', 'usecases/usecase/lib/vue'],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env: {
        browser: true,
        commonjs: false
    }
};
