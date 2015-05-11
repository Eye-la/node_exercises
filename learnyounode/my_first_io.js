var fs = require('fs');

var name = process.argv[2];

var contents = fs.readFileSync(name).toString();

var lines = (contents.split('\n')).length - 1;

console.log(lines);
