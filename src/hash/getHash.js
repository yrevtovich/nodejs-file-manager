import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { print } from '../utils/print.js';

export const printHash = async (fileDir) => {
  const fileContent = await readFile(fileDir);
  const fileHash = createHash('sha256').update(fileContent).digest('hex');
  print(fileHash);
};
