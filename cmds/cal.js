#!/usr/bin/env node

import chalk from 'chalk';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth(); // 0-indexed

// Get first day of the month (0=Sun, 1=Mon, ...)
const firstDay = new Date(year, month, 1).getDay();
// Get number of days in the month
const daysInMonth = new Date(year, month + 1, 0).getDate();

console.log(`\n   ${now.toLocaleString('default', { month: 'long' })} ${year}`);
console.log('Su Mo Tu We Th Fr Sa');

let line = '   '.repeat(firstDay);
for (let day = 1; day <= daysInMonth; day++) {
  let dayStr = day.toString().padStart(2, ' ');
  if (day === now.getDate()) {
    dayStr = chalk.bgWhite.black(dayStr);
  }
  line += dayStr + ' ';
  if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
    console.log(line.trimEnd());
    line = '';
  }
}