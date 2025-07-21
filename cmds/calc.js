#!/usr/bin/env node

export default function(args) {
  if (!args || args.length === 0) {
    console.log('Usage: calc <expression>');
    process.exit(1);
  }
  const expression = args.join(' ');
  const result = eval(expression);
  console.log(result);
}