module.exports = {
    extends: ["plugin:prettier/recommended"],
    rules: {
        "prettier/prettier": ["error", {
            semi: false,
            singleQuote: true,
            tabWidth: 4,
        }],
    },
    overrides: [
        {
            "files": ["*.htm", "*.html"],
            "rules": { "prettier/prettier": ["error", { "parser": "html" }] }
        },
    ]
};