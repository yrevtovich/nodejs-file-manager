import { sep } from 'path';

import { isHomeDir } from '../utils/isHomeDir.js';

export const getParentDirectory = (directory) => (isHomeDir(directory)
  ? directory : directory.split(sep).slice(0, -1));
