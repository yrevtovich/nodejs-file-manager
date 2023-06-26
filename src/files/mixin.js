import { resolve } from 'path';
import { appendFile, rm as remove } from 'fs/promises';
import { cat } from './cat.js';
import { renameFile } from './renameFile.js';
import { copyFile } from './copyFile.js';
import { moveFile } from './moveFile.js';

export const fileOperationsMixin = {
  async cat(filePath) {
    const resolvedFilePath = resolve(this.workingDirectory, filePath);
    await cat(resolvedFilePath);
  },

  async add(filePath) {
    const fileDir = resolve(this.workingDirectory, filePath);
    await appendFile(fileDir, '', { flag: 'ax' });
  },

  async rn(filePath, newFileName) {
    const fileDir = resolve(this.workingDirectory, filePath);
    await renameFile(fileDir, newFileName);
  },

  async cp(source, destination) {
    const sourcePath = resolve(this.workingDirectory, source);
    const destinationDir = resolve(this.workingDirectory, destination);
    await copyFile(sourcePath, destinationDir);
  },

  async mv(sourcePath, destinationPath) {
    const sourceDir = resolve(this.workingDirectory, sourcePath);
    const destinationDir = resolve(this.workingDirectory, destinationPath);
    await moveFile(sourceDir, destinationDir);
  },

  async rm(sourcePath) {
    const sourceDir = resolve(this.workingDirectory, sourcePath);
    await remove(sourceDir);
  },

};
