module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
    rules: {
        // override/add rules' settings here
        // see rules at https://www.npmjs.com/package/eslint-plugin-vue#bulb-rules
        // modify level: strongly-recommended
        //
        //
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always', // html.void : The style of well-known HTML void elements like <br/>
                normal: 'never' // The style of well-known HTML elements except void elements.
            }
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 2,
                allowFirstLine: true
            }
        }],
        'vue/mustache-interpolation-spacing': ['error', 'never'],
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/require-default-prop': 'off', // TODO: actuellement c'est undefined
        'vue/require-prop-types': 'off', //on ne type pas en js, on desactive cette regle
        'vue/v-bind-style': ['error', 'longform'],
        'vue/v-on-style': ['error', 'longform'],
        //
        //
        // modify level: recommended
        //
        //
        'vue/attributes-order': ['off', // TODO: souhitable ? valider l'ordre alternatif ?
            {
                order: [
                    'CONDITIONALS',         // ex: 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
                    'LIST_RENDERING',       // ex: 'v-for item in items'
                    'RENDER_MODIFIERS',     // ex: 'v-once', 'v-pre'
                    'GLOBAL',               // ex: 'id'
                    'DEFINITION',           // ex: 'is'
                    'UNIQUE',               // ex: 'ref', 'key', 'slot'
                    'BINDING',              // ex: 'v-model', 'v-bind', ':property="foo"'
                    'OTHER_ATTR',           // ex: 'customProp="foo"'
                    'EVENTS',               // ex: '@click="functionCall"', 'v-on="event"'
                    'CONTENT'               // ex: 'v-text', 'v-html'
                ]
            }],
        //
        //
        // add Uncategorized rules
        //
        //
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': ['error', {
            selfClosingTag: 'never' // disallow spaces
        }],
        'vue/prop-name-casing': ['error', 'snake_case'],
        'vue/script-indent': 'off', // on ne met pas de javascript dans les .vue, le linting normal s'applique

        // upgrade eslint plugin vue 6.x

        'vue/no-v-html': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off'
    }
};
