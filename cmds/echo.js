#!/usr/bin/env node

const args = process.argv.slice(3);

if (args.length === 0) {
  console.log('Usage: echo <string>');
  process.exit(1);
}

const string = args.join(' ');
console.log(string);