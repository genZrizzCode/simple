#!/usr/bin/env node

console.log('Press ^C to exit');

function printTime() {
  process.stdout.write('\r' + new Date().toLocaleString() + '       ');
}

printTime();
setInterval(printTime, 1000);

process.on('SIGINT', () => {
  process.stdout.write('\n');
  process.exit();
});