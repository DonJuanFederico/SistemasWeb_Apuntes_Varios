const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? './' //Si no se pasa un argumento, se toma el directorio actual

async function ls (directory)

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            const filePath = path

            fs.stat(filePath)
        })
    })
    .catch(err => {
        console.error('error al leer el directorio', err)
        return;
    })