const fs = require('node:fs')

const  stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //si es un fichero
    stats.isBlockDevice(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbolico
    stats.size, // tamaño en bytes
)