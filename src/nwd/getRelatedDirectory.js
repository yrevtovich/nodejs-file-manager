import { resolve } from 'path';

import { HOME_DIR } from '../constants/constants.js';
import { isDirectory } from '../utils/fileUtils.js';

export const getRelatedDirectory = async (workingDirectory, destination) => {
  const newDirectory = resolve(workingDirectory, destination);
  const isDirectoryExist = await isDirectory(newDirectory);

  if (!isDirectoryExist) throw new Error();

  return HOME_DIR.length > newDirectory.length ? workingDirectory : newDirectory;
};
