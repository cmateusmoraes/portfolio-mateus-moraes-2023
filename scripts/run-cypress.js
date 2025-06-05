#!/usr/bin/env node
const { spawnSync } = require('child_process');
const os = require('os');

const isLinux = os.platform() === 'linux';

function run(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: false });
  if (result.error) {
    console.error(result.error);
  }
  process.exitCode = result.status ?? 0;
}

if (isLinux) {
  const checkXvfb = spawnSync('command', ['-v', 'Xvfb'], { shell: true });
  if (checkXvfb.status !== 0) {
    console.log('Xvfb not found. Installing...');
    spawnSync('apt-get', ['update'], { stdio: 'inherit' });
    spawnSync('apt-get', ['install', '-y', 'xvfb'], { stdio: 'inherit' });
  }
  run('xvfb-run', ['-a', 'npx', '--yes', 'cypress', 'run', '--component']);
} else {
  run('npx', ['--yes', 'cypress', 'run', '--component']);
}
