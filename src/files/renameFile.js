import { dirname, join } from 'path';
import { rename } from 'fs/promises';

import { isFile } from '../utils/fileUtils.js';

export const renameFile = async (filePath, newFileName) => {
  const isFileExist = await isFile(filePath);

  if (!isFileExist) {
    throw new Error();
  }

  const fileDirectory = dirname(filePath);
  const renamedFilePath = join(fileDirectory, newFileName);
  await rename(filePath, renamedFilePath);
};
