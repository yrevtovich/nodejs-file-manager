import { readdir } from 'fs/promises';

import { FILE_TYPES } from '../constants/constants.js';
import { getFileType } from '../utils/getFileType.js';

export const printFileList = async (workingDirectory) => {
  const files = await readdir(workingDirectory, { withFileTypes: true });
  const filesData = files.map((data) => ({ name: data.name, type: getFileType(data) }));
  const sortedFileData = filesData.sort((a, b) => (
    (a.type === FILE_TYPES.FILE || b.type === FILE_TYPES.DIRECTORY) ? 1 : -1));

  console.table(sortedFileData);
};
