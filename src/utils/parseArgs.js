export const parseArgs = () => {
  const argumentsData = process.argv.slice(2);

  return argumentsData.reduce((accum, arg) => {
    const [key, value] = arg.split('=');

    return { ...accum, [key.replace('--', '')]: value };
  }, {});
};
