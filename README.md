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
 -TSUP: Does almost the same than Typescript, but will be really helpful when building our project, once it allows us to build our projects for both commonJS and ES modules support, permitting us to not only build the project for newer js syntax projects, but to older ones as well. Also it allows us to easily generate definition files (d.ts) that will help IDEs with intellisense. I also works better than just tsc, as it allows us to build our project in parallel, and it also allows us to build our project in watch mode. The reaslon behind this performance is because TSUP is built with esbuild, which is a really fast bundler.