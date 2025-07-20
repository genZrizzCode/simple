#!/usr/bin/env node

const [,, cmd] = process.argv;

switch (cmd) {
  case 'help':
    require('./cmds/help.js');
    break;
  case 'Hello':
    require('./cmds/hello.js');
    break;
  case 'ping':
    import('./cmds/ping.js').then((module) => {
        const args = process.argv.slice(3); // e.g. ['google.com']
        module.default(args);
    });
  break;
  default:
    console.log(`Unknown command: ${cmd}`);
    console.log(`Try: simple help`);
}