const os=require('os');

const path = require('path')

const fs = require("fs")

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.totalmem()/(1024*1024*1024) + " GB");
// console.log(os.freemem()/(1024*1024) + " MB");


// const filePath  = path.resolve("_dirname","sample","core_modules.js");
// console.log(filePath);
// console.log(__dirname);


// const filePath = path.join("Core-D", "lecture 5", "core_modules.js");
// console.log(filePath);

// const file="Core-D\lecture 5\core_modules.js"
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));


console.log("Deepesh");
const data = fs.readFileSync("file.txt","utf-8"); // Synchronous
console.log(data);
console.log("Yuvraj");




console.log("Aashish");
fs.readFile("file.txt","utf-8",(err,data)=>{ // Asynchronous
    if(err){
        console.log(err);
        
    }else{
        console.log(data);
        
    }
})
console.log("Nitin");






