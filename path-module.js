
const path = require("path");
// __dirname
// console.log(__dirname);

// __filename
// console.log(__filename);
// console.log(path);

// const file = "C://Users/Admin/Desktop/w3Schools-main/default.html";
// const audio = "C://Users/Admin/Music/leg-over.mp3";
// const fileBase = path.basename("C://Users/Admin/Music/leg-over.mp3"); // returns name of the file
// // const fileDir = path.dirname(file); // returns the name of the directory
// // console.log(path.basename(__filename));
// // console.log(fileBase);
// // console.log(path.delimiter);
// // console.log(fileDir);
// // console.log(path.basename(audio));
// // console.log(path.extname(file)); // returns the extension of the file, to be preceded with dot character
// // console.log(path.isAbsolute(audio)); // returns boolean evaluation based on the file path
// // console.log(path.isAbsolute('./users/test.js'));
// const newFile = path.join('html', 'tutorial', 'pages', 'index.html'); // returns the name of a path by joining the given paths
// const test = path.join("test.bundle.min.js");
// // console.log(newFile);
// // console.log(test);
// // console.log(path.extname(test)); 
// const pathStr = './coding/tutorials/backend/data.js';
// console.log(path.normalize(pathStr));
// console.log(path.normalize('../pages/css/index.blade.php'));
// const fileFrom = 'app/speech/music/all-over.mp3';
// const fileTo = "app/music/all-over.mp3";
// console.log(path.relative(fileFrom, fileTo)); // returns the path in relative to the current 
// // working directory
// const filePath = '/demo/test/file.json';
// console.log(path.resolve(filePath));
// console.log(path.resolve('html', 'tutorial', 'pages', 'index.html')); // return the path in absolute with respect
// // to the current working directory
// console.log(test);
// console.log(path.sep);
// console.log(path.delimiter);
// console.log(path.basename('./test/scripts/main.js')); //main.js
// console.log(path.extname("./test/scripts/main.js")) // test/scripts/main.js //.js

// // D:/admin/Abass/ = working directory

// // 'docs' 'pdfs' 'building-technology.pdf'
// path.resolve('docs', 'pdfs', 'building-technology.pdf');
// // D:/admin/Abass/docs/pdfs/building-technology.pdf
// path.join('docs', 'pdfs', 'building-technology.pdf');
// // docs/pdfs/building-technology.pdf


// admin/users/desktop/app.js
// path.dirname('admin/users/desktop/app.js') // 
// console.log(path.join('client', 'components', 'dashboard', 'dashboard.css')); // client/components //D://client
// console.log(path.isAbsolute('./client/users/userCard.js')) //false, true
// console.log(path.extname(path.join(__dirname, 'sample.blade.php'))); // D://learning/coding/backend/sample.blade.php / .php
// path.resolve('client', 'components', 'dashboard', 'dashboard.css') // client/components/dashboard/dashboard.css / 
// D:/learning/coding/backend/client/components/dashboard/dashboard.css
// console.log(path.relative('./client/app.js', '/views/clients/app.js')); // ../app.js
