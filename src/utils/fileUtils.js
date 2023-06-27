import { stat } from 'fs/promises';

export const isDirectory = async (dir) => (await stat(dir))?.isDirectory();

export const isFile = async (path) => (await stat(path))?.isFile();
