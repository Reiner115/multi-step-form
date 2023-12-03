const fs = require('fs');
const readline = require('readline');

const inputFilePath = 'new.txt'; // Replace with your input file path
const outputFilePathPrefix = 'msg'; // Prefix for output files

let lineCounter = 1; // Initialize a line counter for output file names

const inputStream = fs.createReadStream(inputFilePath);
const rl = readline.createInterface({
  input: inputStream,
  output: process.stdout,
  terminal: false
});

let currentOutputFile = null;

rl.on('line', (line) => {
  if (line.includes('<msg>') && line.includes('/msg>')) {
    // Extract content between "<?xml" and "fields>"
    const content = line.substring(line.indexOf('<?xml'), line.indexOf('/msg>') + '/msg>'.length);
    
    // Remove escape characters
    const cleanedContent = content//.replace(/\\(.)/g, '$1');

    // Create or append to the corresponding output file
    if (!currentOutputFile) {
      currentOutputFile = fs.createWriteStream(`${outputFilePathPrefix}${lineCounter}.xml`);
    }

    // Write the cleaned content to the output file
    currentOutputFile.write(cleanedContent + '\n');
  } else if (currentOutputFile) {
    // If the line doesn't match, close the current output file
    currentOutputFile.end();
    currentOutputFile = null;
    lineCounter++;
  }
});

rl.on('close', () => {
  // Close the last output file if it's still open
  if (currentOutputFile) {
    currentOutputFile.end();
  }
  console.log('Processing complete.');
});
