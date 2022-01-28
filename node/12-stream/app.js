const fs = require('fs');

const data = [];

const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // default : 64 kbytes
    // encoding: 'utf-8',
}).on('data', chunk => {
    data.push(chunk);
    console.count('data');
}).on('end', () => {
    console.log(data.join(''));
}).on('error', error => {
    console.log(error);
})

// once 쓰면 한번만!