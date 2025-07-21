#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: random-int <min> <max>');
  process.exit(1);
}

const min = parseInt(args[0]);
const max = parseInt(args[1]);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);