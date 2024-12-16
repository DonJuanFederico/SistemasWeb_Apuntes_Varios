const { readFile } = require("node:fs/promises")

// IIFE ->  inmediatly invoked function expression
;(
    async () => {
        console.log("leyendo el primer archivo...");
        const text = await readFile("./archivo.txt", "utf-8");  // si espera a q se ejecute antes de ejecutar lo demas
        console.log(text);

        console.log("Hacer cosas mientras leo");

        console.log("leyendo el segundo archivo...");
        const secondText = await readFile("./archivo2.txt", "utf-8");
        console.log(secondText);
})();