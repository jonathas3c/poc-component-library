![](https://capsule-render.vercel.app/api?type=slice&height=142&color=3b786c&text=@jonathas-ui&fontAlignY=31&animation=fadeIn&desc=Component%20library%20POC&reversal=true&fontAlign=27&descAlign=24&descAlignY=54&fontColor=fff)

[![Deploy docs](https://github.com/jonathas3c/poc-component-library/actions/workflows/deploy-docs.yml/badge.svg?branch=master)](https://github.com/jonathas3c/poc-component-library/actions/workflows/deploy-docs.yml)

<div align="center">
  <p><a href="https://jonathas3c.github.io/poc-component-library/">Live project here</a></p>
</div>

This projects aims to being a component library POC using [Storybook](https://storybook.js.org/) and [React](https://reactjs.org/). It's meant to be a representation of a component library that I'm currently working on to enhance topics as (but not limited to) coding standards, test coverage, accessibility, development awareness and others, while improving developer experience and improving onboarding processes considerably. In this specific project we did opt for using Stitches and Radix as a CSS-in-JS solution for building the components, but it's not a requirement.

This project is organized following a monorepo structure, separating each corresponding package to make it easier to maintain and edploys new versions for each when needed, but at the same time allowing all the project to be developed and tested in a single repository. If you want to run the project by yourself, please clone the repository and inside the main folder run `npm install`, or`yarn install` in case you use yarn, and then `npm run dev` `yarn run dev` to start the project.

> 📘 Please note that these commands should be run at the base directory of the project, and not inside any of the packages. The idea is that we become able to run all the packages as one and if we run anything inside a package, we'll need to trigger the others independently.

That being said, after running the dev script, you might be able to see all the packages working together at once, but only the storybook docs will be available at the moment. you can access it at <code><a href="http://localhost:6006">http://localhost:6006</a></code>

# Component Roadmap (100%)

- [x] Text
- [x] Heading
- [x] Box
- [x] Button
- [x] TextInput
- [x] TextArea
- [x] Checkbox
- [x] Avatar
- [x] Multistep
