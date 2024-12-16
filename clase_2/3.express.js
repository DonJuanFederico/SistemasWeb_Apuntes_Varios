const express = require('express'); // Importamos Express, un framework para crear servidores en Node.js
const ditto = require('./pokemon/ditto.json'); // Importamos un archivo JSON con los datos de Ditto
const path = require('path'); // Importamos el módulo 'path' para manejar rutas de archivos y directorios

const PORT = process.env.PORT ?? 1234; // Definimos el puerto del servidor, usando un valor de entorno o 1234 por defecto

const app = express(); // Creamos una aplicación de Express
app.disable('x-powered-by'); // Desactivamos el encabezado 'X-Powered-By' por razones de seguridad

app.use(express.json()); // Middleware para procesar cuerpos de solicitudes en formato JSON

// Ruta GET para obtener los datos de Ditto
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto); // Responde con el contenido del archivo 'ditto.json' en formato JSON
});

// Ruta POST para simular la creación de un nuevo Pokémon
app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body); // Responde con un código 201 (Creado) y devuelve el contenido de req.body
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>'); // Responde con un código 404 (No encontrado) y un mensaje HTML básico
});

// Iniciamos el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`); // Confirmamos que el servidor está escuchando en el puerto
});
