const path = require('node:path')

//Unir rutas con path.join
const filePath = path.join('folder', 'subfolder', 'file.txt')
console.log(filePath) 

const base = path.basename('/folder/subfolder/file.txt')
console.log(base) //file.txt

const filename = path.basename('/folder/subfolder/file.txt', '.txt')
console.log(filename) //file

const extension = path.extname('/folder/subfolder/file.txt')
console.log(extension) //.txt