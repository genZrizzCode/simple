#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: reverse <string>');
  process.exit(1);
}

const string = args.join(' ');
const reversed = string.split('').reverse().join('');
console.log(reversed);