module.exports = {
    rules: {
        //*** Programming best practices ***

        // Don't use "var", only use "let" and "const"
        'no-var': 'error',
        // Use const if a variable is never reassigned
        'prefer-const': 'error',

        // Use arrow functions instead of callbacks
        'prefer-arrow-callback': 'error',

        // Require method and property shorthand syntax for object literals
        'object-shorthand': 'error'
    }
};
