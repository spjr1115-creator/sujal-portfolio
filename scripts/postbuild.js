import fs from 'fs';
import path from 'path';

const distIndex = path.resolve('dist/index.html');
const rootIndex = path.resolve('index.html');
const distAssets = path.resolve('dist/assets');
const rootAssets = path.resolve('assets');

if (fs.existsSync(distIndex)) {
  const content = fs.readFileSync(distIndex, 'utf-8');
  fs.writeFileSync(rootIndex, content, 'utf-8');
  console.log('Successfully updated root index.html with built bundle references.');
}

if (fs.existsSync(distAssets)) {
  if (fs.existsSync(rootAssets)) {
    fs.rmSync(rootAssets, { recursive: true, force: true });
  }
  fs.cpSync(distAssets, rootAssets, { recursive: true });
  console.log('Successfully copied fresh assets to root assets directory.');
}
