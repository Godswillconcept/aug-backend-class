const fs = require("fs");
// const { user } = require("./index");

// creation of folder direction
// fs.mkdir("pages", function (err) {
//   if (err) {
//     console.log("Failed to make directory");
//   }
//   else {console.log("Directory created")};
// });

// try {
//   fs.mkdirSync("models");
//   console.log("New folder created");
// } catch (error) {
//   if (error.code === "EEXIST") {
//     console.log("Folder has already been created");
//   }
// }

// delete folder

// fs.rmdir("pages", (err) => {
//   if (err) {
//     console.log("Can't Delete the folder");
//   } else {
//     console.log("Folder deleted");
//   }
// });

// try {
//   fs.rmdirSync("models");
//   console.log("Folder deleted");
// } catch (error) {
//   if (error.code === "ENOENT") {
//     console.log("Folder has already been deleted");
//   }
// }

// create and file into file
// fs.writeFile('pages/index.html')

// fs.mkdir("videos", (err) => {
//   if (err) {
//     console.log(
//       "Can't create the folder\nFolder may exist in the current directory"
//     );
//   } else {
//     console.log("Folder created successfully");
//   }
// });

// try {
//   fs.mkdirSync("audios");
//   console.log("New folder is added to the current directory");
// } catch (error) {
//   if (error) {
//     console.log(
//       "Can't create the folder\nFolder may exist in the current directory"
//     );
//   }
// }

// fs.rmdir("views", (err) => {
//   if (err) {
//     console.log("Can't delete the directory");
//   } else {
//     console.log("Directory deleted!!");
//   }
// });

// try {
//   fs.rmdirSync("audios");
//   console.log("Audios folder deleted");
// } catch (error) {
//   console.log("Folder can't be deleted\nFolder not empty");
// }

// write file
// fs.writeFile("index.html", "Testing fs write file method", (err) => {
//   if (err) {
//     console.log("Can't write such file");
//   } else {
//     console.log("File saved successfully");
//   }
// });

// fs.writeFile(
//   "style.css",
//   ".body {margin: 0; padding: 0; box-sizing: border-box;}",
//   "utf8",
//   (err) => {
//     if (err) {
//       console.log("Writing file failed");
//     } else {
//       console.log("File created with content in it");
//     }
//   }
// );

// try {
//   const data = `<h1>Write file with writeFileSync</h2>`;
//   fs.writeFileSync("index.html", data);
//   console.log("New file is created with content");
// } catch (error) {
//   console.log("File can't be written or created");
// }

// append file
const data = `const parson = { fname: "John", lname: "Doe" }`;
// fs.appendFile("index.js", data, (err) => {
//   if (err) {
//     console.log("can't append file");
//   } else {
//     console.log("File appended successfully with data");
//   }
// });

// fs.appendFile("index.js", `console.log(user)`, (err) => {
//   if (err) {
//     console.log("can't append file");
//   } else {
//     console.log("File appended successfully with data");
//   }
// });

// console.log(user);

// delete file
// fs.unlink("style.css", (err) => {
//   if (err) {
//     console.log("Can't delete/remove file");
//   } else {
//     console.log("File deleted/removed successfully");
//   }
// });

// file exists

// fs.exists("app.js", (e) => {
//   e ? console.log("File exists") : console.log("File do not exist");
// });

// try {
//   fs.existsSync("data.js");
//   console.log("file exist");
// } catch (error) {
//   console.log("file not exist");
// }

// reading file
// fs.readFile("index.html", (err, data) => {
//   if (err) {
//     console.log("Failed to read file");
//   } else {
//     console.log(data.toString());
//   }
// });
fs.readFile("index.html", "utf-8", (err, data) => {
  if (err) {
    console.log("Failed to read file");
  } else {
    console.log(data);
  }
});

// try {
//   const data = fs.readFileSync("data.js", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log("Failed to read file");
// }

// rename file
// fs.rename("index.js", "serve.js", (err) => {
//   err
//     ? console.log("Can't rename file")
//     : console.log("File renamed successfully");
// });
