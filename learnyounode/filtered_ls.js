var fs = require('fs');
var path = require('path');

var name = process.argv[2];

fs.readdir(name, function(err, contents) {
  if (err) throw err;
  contents.forEach(function(f) {
    if (path.extname(f) === '.' + process.argv[3]);
    console.log(f);
  })
})


