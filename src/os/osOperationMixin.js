import os from 'os';

import { print, printCPUS } from '../utils/print.js';
import { MHZ_IN_GHZ } from '../constants/constants.js';

const FRACTION_DIGITS_NUMBER = 3;

export const osOperationMixin = {
  EOL: () => print(JSON.stringify(os.EOL)),
  cpus: () => {
    const amountOfCPUS = os.availableParallelism();
    const data = os.cpus()
      .map(({ model, speed }) => {
        const clockRate = (speed / MHZ_IN_GHZ).toFixed(FRACTION_DIGITS_NUMBER);

        return `model: ${model} clock rate: ${clockRate}GHz`;
      })
      .join('\n');
    printCPUS(amountOfCPUS, data);
  },
  homedir: () => print(os.homedir()),
  username: () => print(os.userInfo().username),
  architecture: () => print(os.arch()),
  os(arg) {
    const command = arg.replace('--', '');
    this[command]();
  },
};
