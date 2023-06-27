import { join, basename } from 'path';
import fs from 'fs';

import { isDirectory, isFile } from '../utils/fileUtils.js';

export const copyFile = async (sourcePath, destinationDir) => {
  const isDestinationDirectory = await isDirectory(destinationDir);
  const isSourceFile = await isFile(sourcePath);

  if (!isDestinationDirectory || !isSourceFile) {
    throw new Error();
  }

  const fileName = basename(sourcePath);

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(join(destinationDir, fileName));

  readStream.pipe(writeStream);
};
