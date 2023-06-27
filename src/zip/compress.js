import fs from 'fs';
import zlib from 'zlib';

export const compress = (filePath, destinationPath) => {
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(destinationPath);

  const brotli = zlib.createBrotliCompress();

  readStream.pipe(brotli).pipe(writeStream);
};
