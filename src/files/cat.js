import fs from 'fs';
import { isFile } from '../utils/fileUtils.js';
import { print } from '../utils/print.js';

export const cat = async (filePath) => {
  const isFileExist = await isFile(filePath);

  if (!isFileExist) {
    throw new Error();
  }

  const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });
  readableStream.once('data', (chunk) => {
    print(chunk);
    readableStream.close();
  });
};
