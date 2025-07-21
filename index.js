#!/usr/bin/env node

const [,, cmd] = process.argv;

switch (cmd) {
  case 'help':
    import('./cmds/help.js').then((mod) => mod.default?.());
    break;
  case 'Hello':
    import('./cmds/hello.js').then((mod) =>mod.default?.());
    break;
  case 'ping':
    import('./cmds/ping.js').then((module) => {
      const args = process.argv.slice(3);
      module.default(args);
    });
    break;
  case 'date':
    import('./cmds/date.js').then((mod) => mod.default?.());
    break;
  case 'cal':
    import('./cmds/cal.js').then((mod) => mod.default?.());
    break;
  case 'calc':
    import('./cmds/calc.js').then((module) => {
      const args = process.argv.slice(3); // skip 'node', 'index.js', 'calc'
      module.default(args);
    });
    break;
  case 'reverse':
    import('./cmds/reverse.js').then((mod) => mod.default?.());
    break;
  case 'cli-stats':
    import('./cmds/cli-stats.js').then((mod) => mod.default?.());
    break;
  case 'weather':
    import('./cmds/weather.js').then((mod) => mod.default?.());
    break;
  case 'random-int':
    import('./cmds/random-int.js').then((mod) => mod.default?.());
    break;
  case 'echo':
    import('./cmds/echo.js').then((mod) => mod.default?.());
    break;
  default:
    console.log(`Unknown command: ${cmd}`);
    console.log(`Try: simple help`);
}