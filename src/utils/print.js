export const print = (content) => console.log(content);

export const printWelcomeMessage = (username) => print(`Welcome to the File Manager, ${username}!`);

export const printExitMessage = (username) => print(`Thank you for using File Manager, ${username}, goodbye!`);

export const printDirectory = (dir) => print(`You are currently in ${dir}`);

export const printCPUS = (amount, data) => print(`Overall amount of CPUS: ${amount}; \nCPUS: \n${data}`);
