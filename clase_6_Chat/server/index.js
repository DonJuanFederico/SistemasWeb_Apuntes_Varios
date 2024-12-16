import express from 'express'
import logger from 'morgan'

import { Server } from 'socket.io'
import { createServer } from 'http'

const port = process.env.PORT ?? 3000

const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('Se ha conectado un usuario nuevo!')

    socket.on('disconnect', () => {
        console.log("Se ha desconectado un usuario :(")
    })

    socket.on('chat message', (msg) => {
        // console.log('mensaje:' + msg)
        io.emit('chat message', msg)    // broadcast del mensaje a todos los usuarios conectados
    })
})

app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})