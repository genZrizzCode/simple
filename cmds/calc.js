#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: calc <expression>');
  process.exit(1);
}

const expression = args.join(' ');
const result = eval(expression);
console.log(result);