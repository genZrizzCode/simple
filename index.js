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
    require('./cmds/ping.js')
  default:
    console.log(`Unknown command: ${cmd}`);
    console.log(`Try: simple help`);
}