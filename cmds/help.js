#!/usr/bin/env node

import chalk from "chalk"
console.log(chalk.bold("Main Commands:\n\n"))
console.log("Hello: The default command to see if this CLI works or not. It is also the only command that starts with an uppercase letter. Confusing, right?\n")
console.log("help: Shows the important commands you need to know.\n")
console.log("ping [website]: gives the ping time to any website. Defaults to simplisticli.pages.dev.\n")
console.log("date: Shows the current date and time, updating every second.\n")
console.log("cal: Prints a calendar for the current month.\n")
console.log("calc <expression>: Evaluates a math expression.\n")
console.log("reverse <text>: Reverses the input text.\n")
console.log("echo <text>: Prints the input text back to you.\n")
console.log("random-int [min] [max]: Prints a random integer between min and max (defaults to 0 and 100).\n")
console.log("weather [city] (--imperial or -i): Shows the current weather for a city (defaults to Los Angeles in metric).\n")
console.log("cli-stats: Shows project info and how many times this command has been run globally.\n")
console.log("but-better: Shows a link to the GitHub repository for this CLI.\n")
console.log("support: Shows a link to the GitHub repository issuesfor this CLI.\n")