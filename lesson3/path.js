const path = require('path');
console.log(path);

const extentionName = path.extname('index.txt');

console.log(extentionName);

const joinName = path.join(__dirname,'../abc');

console.log(joinName);