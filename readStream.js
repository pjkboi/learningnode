const fs = require("fs");

const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");

let filetxt = "";

console.log("type something...");
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  filetxt += data;
});

readStream.once("data", data =>{
  console.log(data);
})

readStream.on("end", () =>{
  console.log("finished reading file");
  console.log(`In total I read ${filetxt.length - 1 } characters of text`);
})