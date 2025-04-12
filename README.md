
# Online ReactJS bundler/IDE
Type and execute your ReactJS code right away from your browser.

## Description
This app allows users to edit and run their ReactJS codes directly from the browser. It can also allow users to create documentation using markdown language. The app allows users to save data to local machine and retrieve data for future use.

## Installation
This is optional.
```
npm install bundle-notebook
```

## Execution
This app will run locally on your machine's terminal.
```
npm exec bundle-notebook serve
```
or
```
npx bundle-notebook serve
```

## Usage
Full usage is as followed:
```
bundle-notebook serve [options] [filename]

Enter a filename to either load previously saved data,
or start saving your progress (default: "notebook.js")

Options:
  -p, --port <number>  port to run server on (default: "4000")
  -h, --help           display help for command

```
You can, for example, run:
```
npx bundle-notebook serve -p 3000 test.js
```
or just simply:
```
npx bundle-notebook serve
```
When the app is up and running, there will be a log:
```
Please proceed to http://localhost:<port_number> to start using the app!
```
Then you can proceed to this local address and start exploring:
```
http://localhost:<port_number>
```

## Technologies
### Front-end
React, CSS, redux, TypeScript, esbuild bundler/minifier
### Back-end
Node, express, commander CLI
### Packages
Lerna, npm, git


## Author
* [Duc Anh Le](https://github.com/DucAnhLe1992)

## Acknowledgments
* [Stephen Grider](https://x.com/ste_grider)
* [esbuild WebAssembly](https://github.com/evanw/esbuild)
* [Fort Awesome CSS](https://fortawesome.com/)
