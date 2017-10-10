module.exports = {
    extends: ['usecases/usecase/lib/common','usecases/usecase/lib/es2015'],
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    env: {
        browser: true,
        commonjs: false
    }
};
