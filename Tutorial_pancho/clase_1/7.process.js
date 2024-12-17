// argumentos de entrada
console.log(process.argv)

//controlar el proceso y su salida

//process.exit(1) //termina el proceso     //esta comentado por que se carga el proceso

//podemoms controlar eventos del proceso
process.on('exit', () => {
    //limpiar recursos
})

//current working directory
console.log(process.cwd())

//plataforma
console.log(process.env.PEPITO)