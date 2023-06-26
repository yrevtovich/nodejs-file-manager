import { sep, resolve } from 'path';
import { readdir } from 'fs/promises';

import { FILE_TYPES, HOME_DIR } from '../constants/constants.js';
import { getFileType } from '../utils/getFileType.js';
import { isDirectory } from '../utils/fileUtils.js';
import { isHomeDir } from '../utils/isHomeDir.js';

const getParentDirectory = (directory) => (isHomeDir(directory)
  ? directory : directory.split(sep).slice(0, -1));

const getRelatedDirectory = async (workingDirectory, destination) => {
  const newDirectory = resolve(workingDirectory, destination);
  const isDirectoryExist = await isDirectory(newDirectory);

  if (!isDirectoryExist) throw new Error();

  return HOME_DIR.length > newDirectory.length ? workingDirectory : newDirectory;
};

const printFileList = async (workingDirectory) => {
  const files = await readdir(workingDirectory, { withFileTypes: true });
  const filesData = files.map((data) => ({ name: data.name, type: getFileType(data) }));
  const sortedFileData = filesData.sort((a, b) => (
    (a.type === FILE_TYPES.FILE || b.type === FILE_TYPES.DIRECTORY) ? 1 : -1));

  console.table(sortedFileData);
};

export { getParentDirectory, getRelatedDirectory, printFileList };
