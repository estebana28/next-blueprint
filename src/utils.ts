import fs from 'fs';
import path from 'path';

export const createAppDirectory = (appName: string) => {
  const appDir = path.join(process.cwd(), appName);
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir);
    console.log(`Directory created: ${appDir}`);
  } else {
    console.log(`Directory already exists: ${appDir}`);
  }
};