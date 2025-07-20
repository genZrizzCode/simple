#!/usr/bin/env node

import chalk from 'chalk';
import { exec } from 'child_process';

const target = process.argv[2] || 'example.org';

// Run the ping command with 1 packet
exec(`ping -c 1 ${target}`, (err, stdout, stderr) => {
  if (err) {
    console.error(chalk.red('ERROR: Ping failed:'), stderr.trim());
    process.exit(1);
  }

  // Look for the time=123.456 ms part
  const match = stdout.match(/time: ([\d.]+)ms/);
  if (match) {
    const pingTime = match[1];
    console.log(chalk.bold.green(`PONG 🏓`), chalk.white(` — ${pingTime}ms to ${target}`));
  } else {
    console.log(chalk.bold.yellow('Ping succeeded, but couldn’t parse the time.'));
    console.log(stdout);
  }
});