const fs = require('node:fs')

console.log('leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => { //ejecutas este callback
    console.log(text)
})

console.log("hacer cosas mientras lee el archivo...")


console.log('leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => { //ejecutas este callback
    console.log(text)
})


/*
leyendo el primer archivo...
hacer cosas mientras lee el archivo...
leyendo el segundo archivo...
Chanchito feliz
Ganando fluidez con node
*/