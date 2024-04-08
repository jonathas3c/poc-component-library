[![Deploy docs](https://github.com/jonathas3c/poc-component-library/actions/workflows/deploy-docs.yml/badge.svg?branch=master)](https://github.com/jonathas3c/poc-component-library/actions/workflows/deploy-docs.yml)

# Components

 - [ ] Text
 - [ ] Heading
 - [ ] Box
 - [ ] Button
 - [ ] TextInput
 - [ ] TextArea
 - [ ] Checkbox
 - [ ] Avatar
 - [ ] Multistep

 # Dependencies

 - Typescript: Project will be developer with TS to ensure code quality, auto completion and scalability as project grows.
 - TSUP: Does almost the same than Typescript, but will be really helpful when building our project, once it allows us to build our projects for both commonJS and ES modules support, permitting us to not only build the project for newer js syntax projects, but to older ones as well. Also it allows us to easily generate definition files (d.ts) that will help IDEs with intellisense. I also works better than just tsc, as it allows us to build our project in parallel, and it also allows us to build our project in watch mode. The reaslon behind this performance is because TSUP is built with esbuild, which is a really fast bundler.

 Each package will have its own `package.json` file, because each package will handle a specifc responsability (tokens will handle variables used by the library, react will handle the components, etc...) and once each has it's owns dependencies, that's why each has their own package.json file. The parent of all packages will also have a package.json file, whose purpose will only to declare that this parent directory should not be push to npm when deployed, but will serve as a gateway to interconnect all the packages together. We do that by using the `"workspaces"` structure, to declare that `packages/*` is the place where all packages reside. That will allow us, for example, to remove each of the `node_modules` folders and `package-lock.json` from each package, and when installing the project, only one `node_modules` will be created, and packages with common dependencies won't install it twice. Advantages of monorepos, my friend.

 We need to remember to set the adequate references for each of the packages, like declaring the `main` entrypoint for each package, the main `esm reference` to each package, and the `types` entrypoint for each package in their respectives `package.json` file.

 ```json
    "main": "./dist/index.js",
    "module": "./dist/index.mjs",
    "types": "./dist/index.d.ts",
 ```
