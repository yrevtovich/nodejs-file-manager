import { osOperationMixin } from './os/osOperationMixin.js';

import { fileOperationsMixin } from './files/mixin.js';
import FileManager from './fileManager/fileManager.js';
import { zipOperationsMixin } from './zip/mixin.js';

Object.assign(FileManager.prototype, osOperationMixin);
Object.assign(FileManager.prototype, fileOperationsMixin);
Object.assign(FileManager.prototype, zipOperationsMixin);

const fm = new FileManager();

fm.start();
