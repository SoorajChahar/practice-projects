import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("enter your text file name: ", (filename) => {
    rl.question("enter the content: ", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.log(`error writing the file: , ${err.message}`);
        } else {
          console.log(`file "${filename}" created successfully!`);
        }
        rl.close();
      });
    });
  });
};

fileCreation();
