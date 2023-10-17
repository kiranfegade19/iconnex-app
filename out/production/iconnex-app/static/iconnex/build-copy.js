

var copydir = require('copy-dir');
var path = require('path');
var sourcePath = path.resolve(__dirname, 'build');
var destinationPath = path.resolve(__dirname, '..');

console.log('Copying files from Source path : ', sourcePath, " to Destination path: ", destinationPath);
copydir.sync(sourcePath, destinationPath);
console.log('Done !');