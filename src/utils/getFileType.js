import { FILE_TYPES } from '../constants/constants.js';

export const getFileType = (data) => (data.isFile() ? FILE_TYPES.FILE : FILE_TYPES.DIRECTORY);
