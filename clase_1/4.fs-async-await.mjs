import { readFile } from "node:fs/promises"; 

console.log("leyendo el primer archivo...");
const text = await readFile("./archivo.txt", "utf-8"); //hasta que no termine de ejecutar lo de despues del await, no abanza
console.log(text);

console.log("Hacer cosas mientras leo");

console.log("leyendo el segundo archivo...");
const secondText = await readFile("./archivo2.txt", "utf-8"); 
console.log(secondText);