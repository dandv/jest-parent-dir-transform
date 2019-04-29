# Applying babel-jest transforms to files in the parent directory

Working, minimalistic, project structure for applying Babel transforms to files in monorepo shared libraries. The illustrated transform is converting ES201 modules into CommonJS, which is very useful until [Jest adds native support for `.mjs` files](https://github.com/facebook/jest/issues/4842).

Run `npm test` to verify that both tests pass.

## Jest issue

This repo also contains a reproduction for [Jest issue #8238](https://github.com/facebook/jest/issues/8238)  (transform not applied to file in parent directory) at the initial commit, [#50a49bc](https://github.com/dandv/jest-parent-dir-transform/commit/50a49bc9187b1103b5a6299517671aa8c0795912).

The solution was to move the `babel` block from `package.json` into `babel.config.js`.
