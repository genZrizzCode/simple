#!/usr/bin/env node

export default function(args) {
  if (!args || args.length === 0) {
    console.log('Usage: reverse <string>');
    process.exit(1);
  }
  const string = args.join(' ');
  const reversed = string.split('').reverse().join('');
  console.log(reversed);
}