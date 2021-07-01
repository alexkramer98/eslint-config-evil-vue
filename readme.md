# Eslint-config-evil-vue

## What is it?

This is a config package for ESLint heavily inspired by <https://github.com/EvgenyOrekhov/eslint-config-hardcore> (version `19.10.1`).
A little stricter - thus: evil - but still very useful and compatible with `VueJS`.

## What rules have changed as opposed to `eslint-config-hardcore`?

* Removed `eslint-plugin-putout`.
* Added `VueJS` support:
    - Uses `plugin:vue/recommended` for the strictest out-of-the-box Vue config.
    - Added `Vuex` support (made an exception for the `state` variable name) for some conflicting rules.
    - `import '@/...'` is supported.
* Enforces single quotes instead of double quotes.
* Uses 4 space indents instead of 2.
* Semicolon is not allowed.
* Loops of any kind are not allowed.
* Require early return where applicable.
* Console statements are allowed (generates a warning instead of an error), but only in the development environment. (You can/should use `husky` to lint your code using the production environment in a `pre-commit hook`.)
* Imports cannot be relative. Use `@` for modules or `@/` for the project root instead.

## Split rules

The rules are split over corresponding files. This makes it easier to locate rules and make changes.

## License

[MIT](LICENSE)
