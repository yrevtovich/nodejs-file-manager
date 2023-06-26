import fs from 'fs';
import zlib from 'zlib';

export const decompress = (filePath, destinationPath) => {
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(destinationPath);

  const brotli = zlib.createBrotliDecompress();

  readStream.pipe(brotli).pipe(writeStream);
};
