#!/usr/bin/env node

setInterval(() => {
  process.stdout.write('\r' + new Date().toLocaleString());
}, 1000);