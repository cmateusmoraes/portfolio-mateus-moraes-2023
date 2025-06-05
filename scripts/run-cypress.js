#!/usr/bin/env node
const { spawnSync } = require('child_process');
const os = require('os');

const platform = os.platform();
const isLinux = platform === 'linux';
const isWindows = platform === 'win32';

const npxCmd = isWindows ? 'npx.cmd' : 'npx';

function run(command, args, opts = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
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
    spawnSync('apt-get', ['update'], { stdio: 'inherit' });
    spawnSync('apt-get', ['install', '-y', 'xvfb'], { stdio: 'inherit' });
  }
  run('xvfb-run', ['-a', npxCmd, '--yes', 'cypress', 'run', '--component']);
} else {
  run(npxCmd, ['--yes', 'cypress', 'run', '--component']);
}
