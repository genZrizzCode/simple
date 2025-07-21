#!/usr/bin/env node

export default function(args) {
  if (!args || args.length < 2) {
    console.log('Usage: random-int <min> <max>');
    process.exit(1);
  }
  const min = parseInt(args[0]);
  const max = parseInt(args[1]);
  if (isNaN(min) || isNaN(max)) {
    console.log('Both min and max must be numbers.');
    process.exit(1);
  }
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}