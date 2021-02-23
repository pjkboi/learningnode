const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");

process.stdin.pipe(writeStream);

// readStream.on("data", data =>{
//     writeStream.write(data);
// });

