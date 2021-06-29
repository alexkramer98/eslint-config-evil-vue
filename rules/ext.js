module.exports = {
    plugins: ["ext"],
    rules: {
        "ext/lines-between-object-properties": [
            "error",
            "always",
            { "exceptBetweenSingleLines": true }
        ],
    }
};