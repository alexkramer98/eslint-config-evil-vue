module.exports = {
    plugins: ["promise"],
    rules: {
        "promise/param-names": "error",
        "promise/always-return": "error",
        "promise/no-return-wrap": "error",
        "promise/no-nesting": "error",
        "promise/no-promise-in-callback": "error",
        "promise/avoid-new": "error",
        "promise/no-callback-in-promise": "error",
        "promise/no-return-in-finally": "error",
        "promise/valid-params": "error",
        "promise/no-new-statics": "error",
        "promise/prefer-await-to-then": "error",
        "promise/catch-or-return": ["error", { "allowFinally": true }],
    }
};