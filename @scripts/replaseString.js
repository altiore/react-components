var fs = require('fs');

var pathsForReplace = ['../../node_modules/@types/'];
var filesHandled = [
  __dirname + '/../Input/index.d.ts',
];

function replaceStringInFile(file, search, replacement = '') {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(search, replacement);

    fs.writeFile(file, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}

function replaceRelativePathWithAbsolute() {
  pathsForReplace.map(path => {
    filesHandled.map(file => {
      replaceStringInFile(file, path);
    })
  });
}

replaceRelativePathWithAbsolute();