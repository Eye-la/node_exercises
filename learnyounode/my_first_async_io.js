var fs = require('fs');

var name = process.argv[2];

var contents = fs.readFile(name, 'utf8', function(err, data) {
  if (err) throw err;
    console.log(data.split('\n').length - 1);
});