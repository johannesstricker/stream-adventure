var fs = require('fs');

function main() {
  if(process.argv.length < 3)
    return console.log("ERROR");
  var filepath = process.argv[2];
  var buffer = fs.createReadStream(filepath);
  buffer.pipe(process.stdout);
}
main();
