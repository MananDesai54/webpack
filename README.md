# webpack

All About [Webpack](https://www.valentinog.com/blog/webpack/)

- As a JavaScript developer you should be familiar with the term module. You might have heard about AMD modules, UMD, Common JS, ES modules.

- webpack is a module bundler and has a broader definition of what a module is, specifically, for webpack, modules are:
  Common JS modules
  AMD modules
  CSS import
  Images url
  ES modules
  That is, webpack is able to ingest dependencies from any of these sources.

- The ultimate goal of webpack is to unify all these different sources and module types in a way that's possible to import everything in your JavaScript code, and finally produce a shippable output.

- Entry Point
- Output
- Loaders
- Plugins
- Mode
- Code Splitting and Lazy loading
- A piece of code that's splits becomes a chunk.
- html-webpack-plugin
- Order of Webpack loaders matters (loader -> rule -> use)
- webpack loaders are loaded from right to left, (or think as of top to bottom).
- webpack doesn't know on its own how to transform JavaScript code. This task is outsourced to a third-party loader, specifically babel-loader, with babel.
- Webpack is all about how to bundle the code, Code Splitting, loading files, uglification, minification, chunks
- Webpack is not a compiler, transpiler or any thing that know how to execute code, It uses loader and plugin to works with different type of files and make a bundle
- webpack doesn't know on its own how to transform JavaScript code, We can convert JS code to many different type of modules like commonJS, AMD(Async), UMD(universal), ESM, SystemJS using babel
- babel is a JavaScript compiler and "transpiler". Given modern JavaScript syntax as input, babel is able to transform it to compatible code that can run in (almost) any browser.
- babel core, the actual engine
- babel preset env for compiling modern Javascript down to ES5
- babel loader for webpack
- webpack works totally fine even without babel. The transpiling process is only necessary for shipping ES5.

webpack treats a whole range of files as modules. But, let's not forget its main purpose: loading ES modules.

Up until 2015 JavaScript didn't have a standard mechanism for code reuse. There had been a lot of attempts to standardize this aspect, which resulted in a messy fragmentation during the years.

You might have heard about AMD modules, UMD, or Common JS. There was no clear winner. Finally, with ECMAScript 2015, ES modules landed in the language. We now have an "official" module system.

webpack makes a joy working with ES modules and modularized code.

- In production mode instead, webpack applies a number of optimizations:

  - minification with TerserWebpackPlugin to reduce the bundle size
  - scope hoisting with ModuleConcatenationPlugin

- It also set process.env.NODE_ENV to "production". This environment variable is useful for doing things conditionally in production or in development.

- Code splitting with webpack

  - avoid big bundles
  - avoid dependencies duplication
  - There is a limit that the webpack community considers the maximum size for the initial bundle of an application: 200KB. To understand why keeping bundles small is paramount, search for "The Cost of JavaScript" on Google.

- There are three main ways to activate code splitting in webpack:

  - with multiple entry points
  - with optimization.splitChunks
  - with dynamic imports

- Code splitting with optimization.splitChunks

  - With optimization.splitChunks we can move out library or code from the main bundle.

- A more powerful technique for code splitting uses dynamic imports to load code conditionally.

  - Code splitting might be used:
    - at the module level
    - at the route level
    - ES modules are static, meaning we cannot change imports at runtime.
    - With a dynamic import instead we can choose when to load our code
    - By prefixing the import path with /_ webpackChunkName: "name_here" _/ we can also control the chunk name

- [ModuleScopePlugin](https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory)
