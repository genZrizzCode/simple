#!/usr/bin/env node

export default function(args) {
  if (!args || args.length === 0) {
    console.log('Usage: echo <string>');
    process.exit(1);
  }
  const string = args.join(' ');
  console.log(string);
}