import express from 'express' // Importa el módulo Express para crear la aplicación web
import logger from 'morgan' // Importa Morgan para registrar solicitudes HTTP
import dotenv from 'dotenv' // Importa dotenv para gestionar variables de entorno
import { createClient } from '@libsql/client' // Importa createClient desde el cliente de libSQL

import { Server } from 'socket.io' // Importa Server desde socket.io para manejar websockets
import { createServer } from 'node:http' // Importa createServer desde node:http para crear el servidor HTTP

dotenv.config() // Carga las variables de entorno desde un archivo .env

const port = process.env.PORT ?? 3000 // Define el puerto a utilizar, tomando de variables de entorno o por defecto 3000

const app = express() // Crea una instancia de la aplicación Express
const server = createServer(app) // Crea un servidor HTTP utilizando la aplicación Express
const io = new Server(server, {
  connectionStateRecovery: {} // Configura Socket.io con recuperación de estado de conexión
})

const db = createClient({
  url: 'libsql://cuddly-wasp-midudev.turso.io', // URL de conexión a la base de datos libSQL
  authToken: process.env.DB_TOKEN // Token de autenticación obtenido de variables de entorno
})

await db.execute(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT,
    user TEXT
  )
`) // Crea una tabla 'messages' si no existe, con campos id, content y user

io.on('connection', async (socket) => { // Escucha el evento de conexión de un cliente
  console.log('a user has connected!') // Registra en la consola que un usuario se ha conectado

  socket.on('disconnect', () => { // Escucha el evento de desconexión del cliente
    console.log('an user has disconnected') // Registra en la consola que un usuario se ha desconectado
  })

  socket.on('chat message', async (msg) => { // Escucha el evento 'chat message' enviado por el cliente
    let result
    const username = socket.handshake.auth.username ?? 'anonymous' // Obtiene el nombre de usuario del handshake o asigna 'anonymous'
    console.log({ username }) // Registra el nombre de usuario en la consola
    try {
      result = await db.execute({ // Inserta el mensaje en la base de datos
        sql: 'INSERT INTO messages (content, user) VALUES (:msg, :username)', // Consulta SQL para insertar el mensaje
        args: { msg, username } // Argumentos para la consulta SQL
      })
    } catch (e) { // Maneja posibles errores durante la inserción
      console.error(e) // Registra el error en la consola
      return // Sale de la función si ocurre un error
    }

    io.emit('chat message', msg, result.lastInsertRowid.toString(), username) // Emite el mensaje a todos los clientes conectados
  })

  if (!socket.recovered) { // Si el socket no ha recuperado su estado (es decir, es una nueva conexión)
    try {
      const results = await db.execute({ // Recupera los mensajes de la base de datos
        sql: 'SELECT id, content, user FROM messages WHERE id > ?', // Consulta SQL para seleccionar mensajes nuevos
        args: [socket.handshake.auth.serverOffset ?? 0] // Argumentos para la consulta SQL
      })

      results.rows.forEach(row => { // Itera sobre cada fila de resultados
        socket.emit('chat message', row.content, row.id.toString(), row.user) // Envía cada mensaje al cliente conectado
      })
    } catch (e) { // Maneja posibles errores durante la recuperación de mensajes
      console.error(e) // Registra el error en la consola
    }
  }
})

app.use(logger('dev')) // Usa Morgan en modo 'dev' para registrar solicitudes HTTP

app.get('/', (req, res) => { // Define la ruta principal '/'
  res.sendFile(process.cwd() + '/client/index.html') // Envía el archivo index.html ubicado en la carpeta 'client'
})

server.listen(port, () => { // Inicia el servidor y escucha en el puerto definido
  console.log(`Server running on port ${port}`) // Registra en la consola que el servidor está corriendo
})
