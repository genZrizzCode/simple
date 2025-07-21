# SimplistiCLI

**simplistiCLI** is an open-source CLI framework designed for building straightforward command-line tools with ease. You are free to fork this project and mold it into your own CLI creation—customize, extend, and make it your own!

## Features
- Minimal, easy-to-understand structure
- Add your own commands by creating files in the `cmds/` directory
- Great starting point for simple, scriptable CLIs
- Open-source and community-friendly

## Getting Started
1. **Clone or fork this repository**
2. **Add your commands** in the `cmds/` folder
3. **Run your CLI** with `node index.js <command> [args]` or make it executable as a global tool

## Example Usage
```sh
simple hello
simple echo Hello, world!
simple cal
simple weather San Francisco
```

## Intalling
To install this CLI, run `npm i simplisticli` in your terminal or go to [the npm page](https://www.npmjs.com/package/simplisticli)

## Website
[simplisticli](https://simplisticli.pages.dev)

## Contributing
Feel free to open issues or pull requests! This project is meant to be a foundation for your own CLI ideas.

## Pull Request Terms
- **Do not add specific, one-off commands.**
- **Pull requests should only improve existing commands or add general-purpose commands that could be useful to many users.**

## Roadmap
A version using the [commander](https://www.npmjs.com/package/commander) library for more advanced CLI features is coming soon!

---

**License:** MIT

