/** @format */

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request made");
  if (req.url == "/file1") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("hey got the res");
    res.end();
  }
});
server.listen(5501, "localhost", () => {
  console.log("listning on port 5501");
});
const fs = require("fs");
const readStream = fs.createReadStream("./longFiles/sample-2mb-text-file.txt", {
  enconding: "utf8",
});
readStream.on("data", (chunk) => {});
