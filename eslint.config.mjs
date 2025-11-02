// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
    features: {
        // Rules for module authors
        tooling: true,
        // Rules for formatting
        stylistic: true,
    },
    dirs: {
        // src: ['./playground'],
    },
}).append(
    // your custom flat config here...
    {
        rules: {
            '@stylistic/semi': 'off',
            '@stylistic/quotes': 'off',
            '@stylistic/comma-dangle': 'off',
            '@stylistic/arrow-parens': 'off',
            '@stylistic/brace-style': 'off',
            '@stylistic/operator-linebreak': 'off',
            '@stylistic/indent': ['error', 4],
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': 'off',
            'vue/mustache-interpolation-spacing': ['warn', 'never'],
            'vue/no-multi-spaces': 'warn',
            'vue/padding-line-between-blocks': ['warn', 'always'],
            'vue/v-on-event-hyphenation': ['warn', 'never'],
            'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
            'vue/define-macros-order': [
                'warn',
                {
                    order: ['defineProps', 'defineEmits'],
                },
            ],
            'vue/no-unused-refs': 'warn',
            'vue/no-template-shadow': 'warn',
            'vue/require-default-prop': 'warn',
            'vue/require-explicit-emits': 'warn',
            'vue/no-v-html': 'warn',
            'vue/max-attributes-per-line': [
                'warn',
                {
                    singleline: 3,
                    multiline: 3,
                },
            ],
            'vue/singleline-html-element-content-newline': 'off',
        },
    },
)
