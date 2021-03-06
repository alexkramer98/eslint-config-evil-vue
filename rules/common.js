module.exports = {
    rules: {
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-console": process.env.NODE_ENV === 'production' ? "error" : "warn",
        "no-warning-comments": process.env.NODE_ENV === 'production' ? "error" : "warn",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-dupe-args": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-multi-str": "error",
        "no-global-assign": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-plusplus": "error",
        "no-proto": "error",
        "no-regex-spaces": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unreachable": "error",
        "no-use-before-define": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-void": "error",
        "no-var": "error",
        "no-with": "error",
        "block-scoped-var": "error",
        "camelcase": "error",
        "consistent-this": "error",
        "constructor-super": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "id-length": "error",
        "max-depth": "error",
        "max-nested-callbacks": "error",
        "max-params": "error",
        "max-statements": "error",
        "new-cap": "error",
        "object-shorthand": "error",
        "operator-assignment": "error",
        "prefer-const": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "radix": "error",
        "require-yield": "error",
        "yoda": "error",
        "no-empty-function": "error",
        "no-new-symbol": "error",
        "no-unmodified-loop-condition": "error",
        "prefer-rest-params": "error",
        "no-extra-label": "error",
        "no-unused-labels": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "max-statements-per-line": "error",
        "no-duplicate-imports": "error",
        "no-unsafe-finally": "error",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "max-lines": "error",
        "no-template-curly-in-string": "error",
        "symbol-description": "error",
        "prefer-numeric-literals": "error",
        "line-comment-position": "error",
        "no-useless-return": "error",
        "no-return-await": "error",
        "require-await": "error",
        "no-await-in-loop": "error",
        "prefer-destructuring": "error",
        "no-multi-assign": "error",
        "prefer-promise-reject-errors": "error",
        "no-compare-neg-zero": "error",
        "for-direction": "error",
        "no-buffer-constructor": "error",
        "getter-return": "error",
        "strict": "error",
        "lines-between-class-members": "error",
        "max-classes-per-file": "error",
        "no-misleading-character-class": "error",
        "require-atomic-updates": "error",
        "no-async-promise-executor": "error",
        "require-unicode-regexp": "error",
        "no-useless-catch": "error",
        "prefer-named-capture-group": "error",
        "no-redeclare": "error",
        "no-prototype-builtins": "error",
        "no-import-assign": "error",
        "prefer-regex-literals": "error",
        "default-param-last": "error",
        "no-constructor-return": "error",
        "no-dupe-else-if": "error",
        "no-setter-return": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",
        "accessor-pairs": "error",
        "default-case-last": "error",
        "no-useless-backreference": "error",
        "no-loss-of-precision": "error",
        "no-promise-executor-return": "error",
        "no-unreachable-loop": "error",
        "no-nonoctal-decimal-escape": "error",
        "init-declarations": "error",
        "no-magic-numbers": [
            "error",
            { "ignore": [0, 1], "enforceConst": true, "ignoreDefaultValues": true }
        ],
        "complexity": ["error", { "max": 10 }],
        "func-names": ["error", "as-needed"],
        "func-style": ["error", "declaration"],
        "one-var": ["error", "never"],
        "no-else-return": ["error", { "allowElseIf": false }],
        "no-cond-assign": ["error", "always"],
        "no-irregular-whitespace": ["error", { "skipStrings": false }],
        "valid-typeof": ["error", { "requireStringLiterals": true }],
        "no-return-assign": ["error", "always"],
        "no-self-assign": ["error", { "props": true }],
        "no-shadow": [
            "error",
            {
                "builtinGlobals": true,
                "allow": ["defaultStatus", "event", "find", "length", "name", "status"]
            }
        ],
        "no-undef": ["error", { "typeof": true }],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "caughtErrors": "all",
                "varsIgnorePattern": "^ignore$",
                "argsIgnorePattern": "^ignore$"
            }
        ],
        "no-underscore-dangle": ["error", { "enforceInMethodNames": true }],
        "no-unneeded-ternary": ["error", { "defaultAssignment": false }],
        "func-name-matching": ["error", { "considerPropertyDescriptor": true }],
        "use-isnan": [
            "error",
            { "enforceForSwitchCase": true, "enforceForIndexOf": true }
        ],
        "no-param-reassign": ["error", { "props": true }],
        "no-unsafe-negation": ["error", { "enforceForOrderingRelations": true }],
        "grouped-accessor-pairs": ["error", "getBeforeSet"],
        "no-implicit-globals": ["error", { "lexicalBindings": true }],
        "array-callback-return": [
            "error",
            { "allowImplicit": false, "checkForEach": true }
        ],
        "no-extra-boolean-cast": ["error", { "enforceForLogicalOperands": true }],
        "spaced-comment": ["error", "always", { "block": { "balanced": true } }],
        "multiline-comment-style": ["error", "separate-lines"],
        "no-unsafe-optional-chaining": [
            "error",
            { "disallowArithmeticOperators": true }
        ],
        "no-unused-expressions": ["error", { "enforceForJSX": true }],
        "no-sequences": ["error", { "allowInParentheses": false }],
        "no-implicit-coercion": ["error", { "disallowTemplateShorthand": true }],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "*", "next": "*" },
            { "blankLine": "any", "prev": "expression", "next": "expression" },
            { "blankLine": "always", "prev": "iife", "next": "iife" },
            { "blankLine": "any", "prev": "*", "next": ["case"] },
            { "blankLine": "any", "prev": "directive", "next": "directive" },
            { "blankLine": "any", "prev": "const", "next": "const" },
            { "blankLine": "any", "prev": "let", "next": "let" },
            { "blankLine": "any", "prev": "var", "next": "var" },
            { "blankLine": "any", "prev": "import", "next": "import" },
            { "blankLine": "any", "prev": "export", "next": "export" },
            {
                "blankLine": "always",
                "prev": "*",
                "next": ["cjs-import", "cjs-export"]
            },
            {
                "blankLine": "always",
                "prev": ["cjs-import", "cjs-export"],
                "next": "*"
            },
            { "blankLine": "any", "prev": "cjs-import", "next": "cjs-import" },
            { "blankLine": "any", "prev": "cjs-export", "next": "cjs-export" }
        ],
        "no-restricted-syntax": [
            "error",
            {
                "selector": "SequenceExpression",
                "message": "The comma operator is confusing and a common mistake. Don???t use it!"
            }
        ],
        "arrow-body-style": "error",
        "no-tabs": "error",
        "curly": "error",
        "max-len": [
            "error",
            {
                "code": 120,
                "comments": 80,
                "ignorePattern": "// eslint-disable-next-line",
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "quotes": [
            "error",
            "single",
            { "avoidEscape": true, "allowTemplateLiterals": false }
        ],
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                "beforeLineComment": true,
                "allowBlockStart": true,
                "allowObjectStart": true,
                "allowArrayStart": true,
                "allowClassStart": true
            }
        ],
        "no-restricted-imports": ["error", {
            "patterns": [{
                "group": [".*"],
                "message": "Relative imports are not allowed. Please use \'@\' for a module or \'@/\' for the project root."
            }]
        }],
        "no-shadow": ["error", { "allow": ["state"] }],
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
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
};