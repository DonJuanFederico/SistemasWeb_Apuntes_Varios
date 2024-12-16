const os = require('node:os')

console.log("informacion del sistema operativo")
console.log("_________________________")

console.log('Nombre del sistema operativo:', os.platform())
console.log('Version del sistema operativo:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus()) //vamos a poder escalar los procesos en Node.js
console.log('Uptime:', os.uptime() / 60 /60)