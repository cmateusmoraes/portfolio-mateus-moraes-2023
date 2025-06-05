#!/usr/bin/env node
const { spawnSync } = require('child_process');
const os = require('os');

const platform = os.platform();
const isLinux = platform === 'linux';

function run(command, args, opts = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: true,
    ...opts,
  });
  if (result.error) {
    console.error(result.error);
  }
  process.exitCode = result.status ?? 0;
}

if (isLinux) {
  const checkXvfb = spawnSync('command', ['-v', 'Xvfb'], { shell: true });
  if (checkXvfb.status !== 0) {
    console.log('Xvfb not found. Installing...');
    spawnSync('apt-get', ['update'], { stdio: 'inherit', shell: true });
    spawnSync('apt-get', ['install', '-y', 'xvfb'], { stdio: 'inherit', shell: true });
  }
  run('xvfb-run', ['-a', 'npx', '--yes', 'cypress', 'run', '--component']);
} else {
  run('npx', ['--yes', 'cypress', 'run', '--component']);
}
