import { resolve } from 'path';
import { compress } from './compress.js';
import { decompress } from './decompress.js';

export const zipOperationsMixin = {
  compress(sourcePath, destinationPath) {
    const absoluteSourcePath = resolve(this.workingDirectory, sourcePath);
    const absolutDestinationPath = resolve(this.workingDirectory, destinationPath);
    compress(absoluteSourcePath, absolutDestinationPath);
  },

  async decompress(sourcePath, destinationPath) {
    const absoluteSourcePath = resolve(this.workingDirectory, sourcePath);
    const absolutDestinationPath = resolve(this.workingDirectory, destinationPath);
    decompress(absoluteSourcePath, absolutDestinationPath);
  },
};
