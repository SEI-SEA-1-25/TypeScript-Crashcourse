# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) TypeScript Crash Course

this code along has been sponsered in part by [these gitbook notes](https://gawdiseattle.gitbook.io/wdi/16-react/adjacent-topics/01-intro)

### Learning Objectives
- Describe advantages and disadvantages to using TypeScript
- Identify and use basic types, interfaces and additional TypeScript stuff
- Understand type inference and declaration
- Configure and use the typescript compiler

![worth it](https://media0.giphy.com/media/xT5LMVWdfSTiUh0Q0w/giphy.gif?cid=ecf05e47ggdryxmbzqr4d4xivapp6f2ec76muc0rs32uwhd4&rid=giphy.gif)
___

# Why TypeScript?

- Identifying bugs at compile time is better than finding them at runtime
- Type enforcement in large code bases reduces bugs across the organization/teams/time
- TypeScript allows ESNext syntax -- though many of the features highlighted by TS folks have been introduced with ES6 and 7
- Lowish barrier to entry
    - can use it sparingly to start (your JS is probably fine, just add some typings or `any`)
    - implicit and explicit typing 

# Disadvantages

- Adds complexity to your project
    - directory structure needs source and build
    - setup compiler or babel and/or webpack and build step
- TS compiler will yell at you for things that you have perceived as legal for the entirety of your JS career
- Advanced techniques can be a little confusing

# TypeScript Resources

## Reading/tutorials

* Docs are great: [TypeScript Docs / Handbook](https://www.typescriptlang.org/docs)
* Good resource put together by some benevolent dev: [TypeScript Deep Dive by @basarat](https://basarat.gitbooks.io/typescript/)
* [Adding Typscript to Create React App](https://create-react-app.dev/docs/adding-typescript/)
* Crashcoursey-style blog on [TypScript Type Notation](https://2ality.com/2018/04/type-notation-typescript.html)
* [Rules of Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
* [Learn x in y where x is TypeScript](https://learnxinyminutes.com/docs/typescript/)

## Other Media:

* Podcast episode from Syntax.FM doing high-level chat on [why/where/how of Typescript](https://syntax.fm/show/324/typescript-fundamentals)
* YouTube Tutorial/overall walkthrough of Typescript that acts as a [long-form codelong/lecture](https://www.youtube.com/watch?v=BwuLxPH8IDs&t=1s)
* first minute of this video is a great explainer on the [WHY of Typescript](https://www.youtube.com/watch?v=bAB_nNf8-a0)

## TypeScript Shell Commands Cheat Sheet

Handy table of TypeScript (and ats related) commands to keep in your back pocket:

| command | thing it does |
|---------|---------------|
| `npm install -g typescript` | installs TypeScript globall with npm |
| `tsc -v` | check your version of typescript |
| `tsc <fileName.ts>` | compiles `fileName.ts` to `fileName.js` |
| `tsc -w <fileName.ts>` | auto compiles `fileName.ts` to `fileName.js` on save (like nodemon) |
| `tsc --init` | creates a `tsconfig.json` |
| `tsc -p tsconfig.json` | compiles as a project using the config json, can be combined with the -w flag
| `npm --save-dev @types/<package name>` | save type declaration files for node packages: example `npm i --save-dev @types/express @types/dotenv @types/node`
| `create-react-app --template typescript <react-app-folder-name>` | creates a new react app in a folder called `<react-app-folder-name>` with typescript as the base of the project
___
