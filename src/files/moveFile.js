import { join, basename } from 'path';
import { unlink } from 'fs/promises';
import fs from 'fs';

import { isDirectory, isFile } from '../utils/fileUtils.js';

export const moveFile = async (sourcePath, destinationDir) => {
  const isDestinationDirectory = await isDirectory(destinationDir);
  const isSourceFile = await isFile(sourcePath);

  if (!isDestinationDirectory || !isSourceFile) {
    throw new Error();
  }

  const fileName = basename(sourcePath);

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(join(destinationDir, fileName));

  readStream.on('close', () => {
    unlink(sourcePath, destinationDir);
  });

  readStream.pipe(writeStream);
};
