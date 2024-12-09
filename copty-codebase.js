import fs from "fs";
import { join, extname } from "path";

var out = "";

function readDir(path) {
  var lines = 0;

  fs.readdirSync(path).map((currentPath) => {
    var currentJoinedPath = join(path, currentPath);
    if (fs.statSync(currentJoinedPath).isFile()) {
      const en = extname(currentPath);
      if (en != ".jsx" && en != ".css") return;

      out += `\n//filepath: ${currentJoinedPath}\n${fs.readFileSync(
        currentJoinedPath,
        "utf-8"
      )}\n`;
    } else {
      readDir(currentJoinedPath);
    }
  });

  return lines;
}

readDir("./src/pages/");
fs.writeFileSync("the-codebase-in-one-file.txt", out, "utf-8");
