import { cp, mkdir, rm } from 'node:fs/promises';

const files = [
  'index.html',
  'presence-app.html',
  'firebase-config.js',
  'manifest.json',
  'sw.js',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png'
];

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await Promise.all(files.map(file => cp(file, `dist/${file}`)));
