module.exports = {
    extends: [
        "./rules/@shopify",
        "./rules/array-func",
        "./rules/common",
        "./rules/eslint-comments",
        "./rules/ext",
        "./rules/import",
        "./rules/no-constructor-bind",
        "./rules/no-use-extend-native",
        "./rules/optimize-regex",
        "./rules/promise",
        "./rules/regexp",
        "./rules/security",
        "./rules/sonarjs",
        "./rules/unicorn",
        "./rules/no-loops",
    ].map(require.resolve),
    parserOptions: {
        sourceType: "module",
    },
    env: {
        es2021: true,
        browser: true,
    },
    rules: {
        "prettier/prettier": ["error", {
            singleQuote: true,
            tabWidth: 4,
        }],
        "vue/html-indent": ["error", 4],
        "no-shadow": ["error", { "allow": ["state"] }],
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [ // All properties except state are in the ignorePropertyModificationsFor array by default.
                    "state",
                    "acc",
                    "e",
                    "ctx",
                    "req",
                    "request",
                    "res",
                    "response",
                    "$scope"
                ]
            }
        ],
    },
    reportUnusedDisableDirectives: true,
    ignorePatterns: [
        "!.*",
        ".git/",
        "node_modules/",
        "bower_components/",
        "jspm_packages/",
        ".npm/",
        "vendor/",
        "lib-cov/",
        "coverage/",
        ".nyc_output/",
        ".cache/",
        "build/",
        "dist/",
        "tmp/",
        "**/*.min.*"
    ],
    overrides: [
        {
            "files": ["*.htm", "*.html"],
            "rules": { "prettier/prettier": ["error", { "parser": "html" }] }
        },
        {
            files: [
                "**/test/**",
                "**/tests/**",
                "**/__tests__/**",
                "*.test.*",
                "*.spec.*",
                "*.e2e.*"
            ],
            rules: {
                "max-statements": ["error", 15],
                "no-magic-numbers": "off",
                "max-classes-per-file": "off",
                "sonarjs/no-identical-functions": "off"
            }
        },
        {
            files: ["*.htm", "*.html"],
            plugins: ["@html-eslint"],
            parser: "@html-eslint/parser",
            rules: {
                "@html-eslint/require-doctype": "error",
                "@html-eslint/no-duplicate-id": "error",
                "@html-eslint/no-inline-styles": "error",
                "@html-eslint/require-li-container": "error",
                "@html-eslint/no-obsolete-tags": "error",
                "@html-eslint/require-lang": "error",
                "@html-eslint/require-title": "error",
                "@html-eslint/no-multiple-h1": "error",
                "@html-eslint/require-meta-description": "error",
                "@html-eslint/require-img-alt": "error",
                "@html-eslint/no-skip-heading-levels": "error",
                "@html-eslint/require-frame-title": "error",
                "@html-eslint/no-non-scalable-viewport": "error",
                "@html-eslint/no-positive-tabindex": "error",
                "@html-eslint/require-meta-viewport": "error",
                "@html-eslint/no-duplicate-attrs": "error",
                "@html-eslint/no-target-blank": "error",
                "@html-eslint/require-button-type": "error",
                "@html-eslint/no-abstract-roles": "error",
                "@html-eslint/no-aria-hidden-body": "error",
                "@html-eslint/no-accesskey-attrs": "error",
                "spaced-comment": "off",
                "no-inline-comments": "off",
                "import/unambiguous": "off",
            }
        },
        {
            "files": ["*.json"],
            "extends": ["plugin:json/recommended"],
            "rules": { "import/unambiguous": "off"}
        }
    ]
};