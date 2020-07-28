module.exports = {
    rules: {
        //*** Programming best practices ***

        // Disallows unnecessary return await
        'no-return-await': 'error',

        // Disallow async functions which have no await expression
        'require-await': 'error',

        // Disallow await inside of loops
        'no-await-in-loop': 'error',

        // Disallow using an async function as a Promise executor
        'no-async-promise-executor': 'error',
    },
};
