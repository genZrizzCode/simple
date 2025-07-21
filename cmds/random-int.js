#!/usr/bin/env node

export default function(args) {
  let min = 0, max = 100;
  if (args && args.length === 1) {
    max = parseInt(args[0]);
  } else if (args && args.length >= 2) {
    min = parseInt(args[0]);
    max = parseInt(args[1]);
  }
  if (isNaN(min) || isNaN(max)) {
    console.log('Usage: random-int [min] [max] (defaults to 0 100)');
    process.exit(1);
  }
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}