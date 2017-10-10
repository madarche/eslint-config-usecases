module.exports = {
    rules: {
        //*** Programming best practices ***

        // Don't use "var", only use "let" and "const"
        'no-var': 'error',

        // Use arrow functions instead of callbacks
        'prefer-arrow-callback': 'error',
        // Use parentheses around arrow function params even if empty
        'arrow-parens': 'error',

        // Require method and property shorthand syntax for object literals
        'object-shorthand': 'error'
    }
};
