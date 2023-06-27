import readline from 'readline';
import path from 'path';

import { parseArgs } from '../utils/parseArgs.js';
import { ERROR_MESSAGES, HOME_DIR } from '../constants/constants.js';
import { parseUserInput } from '../utils/parseUserInput.js';
import {
  printExitMessage, printWelcomeMessage, printDirectory, print,
} from '../utils/print.js';
import { getParentDirectory, getRelatedDirectory, printFileList } from '../nwd/index.js';
import { printHash } from '../hash/getHash.js';

class FileManager {
  start = () => {
    this.workingDirectory = HOME_DIR;
    this.user = parseArgs()?.username;
    printWelcomeMessage(this.user);
    printDirectory(this.workingDirectory);
    this.initReadlineInterface();
  };

  initReadlineInterface = () => {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.rl.on('line', (input) => {
      this.handleUserCommand(input);
    });
    this.rl.on('close', () => {
      printExitMessage(this.user);
    });
  };

  handleUserCommand = (input) => {
    const [command, args] = parseUserInput(input);

    try {
      this.validateUserCommand(command);
      this.invokeUserCommand(() => this[command](...args));
    } catch (error) {
      print(error.message);
    }
  };

  validateUserCommand = (command) => {
    if (!this[command]) {
      throw new Error(ERROR_MESSAGES.invalidInput);
    }
  };

  invokeUserCommand = async (callback) => {
    try {
      await callback();
      printDirectory(this.workingDirectory);
    } catch {
      print(ERROR_MESSAGES.operationFailed);
    }
  };

  _exit = () => this.rl.close();

  up = () => {
    this.workingDirectory = getParentDirectory(this.workingDirectory);
  };

  cd = async (destination) => {
    const newDirectory = await getRelatedDirectory(this.workingDirectory, destination);
    this.workingDirectory = newDirectory || this.workingDirectory;
  };

  ls = () => printFileList(this.workingDirectory);

  hash = (filePath) => printHash(path.resolve(this.workingDirectory, filePath));
}

export default FileManager;
