
# 🧠 Online ReactJS Bundler / IDE
An in-browser ReactJS development environment that allows you to write, compile, and preview React code instantly. This tool also supports Markdown rendering and local file persistence, making it ideal for rapid prototyping, documentation, and educational purposes.

---

## 🚀 Features

- **Live ReactJS Compilation:** Write and execute React code directly in your browser with real-time feedback.
- **Markdown Support:** Seamlessly integrate Markdown to create rich documentation alongside your code.
- **Local Persistence:** Save your work to your local machine and retrieve it later for continued development.
- **Zero Setup:** No need for installations or configurations—start coding immediately.
- **Flexible Execution:** Run the application locally using npx or install it globally for repeated use.

---

## 🛠️ Installation

While installation is optional, you can install the package globally using npm:
```
npm install -g bundle-notebook
```

This app will run locally on your machine's terminal.
You can run the application in two ways:

**1. Using `npx` (Recommended)**
This method doesn't require global installation:
```
npx bundle-notebook serve
```

**2. Using Installed Package**
If you've installed the package globally:
```
npm exec bundle-notebook serve
```
or
```
bundle-notebook serve
```

---

## ⚙️ Usage
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

---

## 📁 Project Structure
```
online-code-editor/
├── packages/
│   └── bundle-notebook/     # Core package containing the bundler and IDE logic
|       ├── cli/             # Package to manage CLI with users
|       ├── local-api/       # Package to manage saving to, and fetching saved data from local storage
|       └── local-client/    # Package to implement web-based application
├── .gitignore
├── lerna.json               # Lerna configuration for managing monorepo
├── package.json             # Root package configuration
└── README.md
```

---

## 🛠️ Technologies
**- Front-end:** React, CSS, redux, TypeScript, esbuild bundler/minifier
**- Back-end:** Node, express, commander CLI
**- Packages:** Lerna, npm, git

---

## 🧪 Development
You can test, run, contribute or modify the project:
```
// Clone the repository
git clone https://github.com/DucAnhLe1992/online-code-editor.git
cd online-code-editor

// Install dependencies
npm install

// Run the application
npm run start
```

---

## 📄 License
This project is licensed under the MIT License.

---

## 👤 Author
Duc Anh Le

* GitHub: [@DucAnhLe1992](https://github.com/DucAnhLe1992)
* LinkedIn: [linkedin.com/in/ducanhle92](https://linkedin.com/in/ducanhle92)

---

## 🙌 Acknowledgments
* [Stephen Grider](https://x.com/ste_grider)
* [esbuild WebAssembly](https://github.com/evanw/esbuild)
* [Fort Awesome CSS](https://fortawesome.com/)
