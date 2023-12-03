const fs = require('fs');
const readline = require('readline');

const inputFilePath = 'old.txt'; // Replace with your input file path
const outputFilePath = 'new.txt'; // Replace with your output file path
const searchString = 'wsValidation';

const inputStream = fs.createReadStream(inputFilePath);
const outputStream = fs.createWriteStream(outputFilePath);

const rl = readline.createInterface({
  input: inputStream,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  if (line.includes(searchString)) {
    outputStream.write(line + '\n');
  }
});

rl.on('close', () => {
  console.log('Processing complete.');
  outputStream.end();
});
