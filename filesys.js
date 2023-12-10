const fs = require('node:fs');
//import * as fs from 'node:fs';

// fs.readFile('myFile.txt', 'utf8', (err, data)=>{
//     console.log(err,data)
// })

// const a = fs.readFileSync('myFile.txt')
// console.log(a.toString())
// console.log("Finished reading")


// fs.writeFile('myFile1.txt', "thid djsdgjgsd", () =>{
//     console.log("udyegkhj")
// })

const b = fs.writeFileSync('myFile1.txt', "thid djsdgjgsd")
console.log(b)
console.log("Finished writing")

