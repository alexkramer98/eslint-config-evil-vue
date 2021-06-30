module.exports = {
    plugins: ["import"],
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ['@', './src']
                ],
                extensions: ['.js', '.json', '.vue']
            }
        }
    },
    rules: {
        "import/named": "error",
        "import/default": "error",
        "import/namespace": "error",
        "import/no-absolute-path": "error",
        "import/no-dynamic-require": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/no-self-import": "error",
        "import/export": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-deprecated": "error",
        "import/no-mutable-exports": "error",
        "import/unambiguous": "error",
        "import/no-amd": "error",
        "import/first": "error",
        "import/exports-last": "error",
        "import/no-duplicates": "error",
        "import/no-namespace": "error",
        "import/newline-after-import": "error",
        "import/prefer-default-export": "error",
        "import/max-dependencies": "error",
        "import/no-named-default": "error",
        "import/no-anonymous-default-export": "error",
        "import/group-exports": "error",
        "import/no-commonjs": "error",
        "import/no-relative-packages": "error",
        "import/no-import-module-exports": "error",

        "import/no-unresolved": ["error", { "commonjs": true }],
        "import/no-cycle": ["error", { "commonjs": true }],
        "import/no-useless-path-segments": ["error", { "commonjs": true }],
        "import/no-unused-modules": [
            "error",
            { "missingExports": false, "unusedExports": true }
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/test/**",
                    "**/tests/**",
                    "**/__tests__/**",
                    "*.test.*",
                    "*.spec.*",
                    "*.e2e.*"
                ],
                "optionalDependencies": false,
                "peerDependencies": false,
                "bundledDependencies": false
            }
        ],
        "import/extensions": ["error", "ignorePackages"],
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "unknown",
                    "parent",
                    "sibling",
                    "index"
                ],
                "newlines-between": "always"
            }
        ],
    }
};