#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import os from 'os';

const pkgPath = path.resolve('package.json');
const lockPath = path.resolve('package-lock.json');

// Path to global stats file in the user's home directory
const statsPath = path.join(os.homedir(), '.simple-cli-stats.json');

// Read and update the counter
let stats = { cliStatsRuns: 0 };
try {
  if (fs.existsSync(statsPath)) {
    stats = JSON.parse(fs.readFileSync(statsPath, 'utf8'));
  }
} catch {}
stats.cliStatsRuns = (stats.cliStatsRuns || 0) + 1;
fs.writeFileSync(statsPath, JSON.stringify(stats), 'utf8');

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));

console.log('--- CLI Project Stats ---');
console.log(`Name:        ${pkg.name}`);
console.log(`Version:     ${pkg.version}`);
console.log(`Description: ${pkg.description}`);
console.log(`Author:      ${pkg.author}`);
console.log(`License:     ${pkg.license}`);
console.log(`Lockfile:    v${lock.lockfileVersion}`);
console.log('\nDependencies:');
for (const dep in pkg.dependencies) {
  const depLock = lock.packages[`node_modules/${dep}`];
  const resolved = depLock ? depLock.version : pkg.dependencies[dep];
  console.log(`- ${dep}: ${resolved}`);
}
console.log(`\ncli-stats has been run globally ${stats.cliStatsRuns} times.`);

