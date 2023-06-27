const normalizeCommand = (command) => command.replace('.', '_');

const normalizeArguments = (args) => args.filter(Boolean).map((arg) => arg.trim());

export const parseUserInput = (input) => {
  const [command, ...args] = input.split(' ');

  const normalizedCommand = normalizeCommand(command);
  const normaizedArgs = normalizeArguments(args);

  return [normalizedCommand, normaizedArgs];
};
