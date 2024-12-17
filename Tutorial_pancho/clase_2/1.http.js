const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html');
 res.end('<h1>Hello, World!</h1>');
});

const processRequest = (req, res) => {

    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('<h1>Esta es la pagina de inicio</h1>')
    }else if('Conent-Type','imagen.png'){
        fstat.readFile('./darth_vader_cortando_jamon.jpg', (err, data) => { //leer un archivo
            if(err){    //si hay un error   
                res.statusCode = 500
                res.end('Internal Server Error')
            }else{
                res.setHeader('Content-Type', 'imagen.png') //si no hay error, se envia la imagen
                res.end(data)
            }
        })
    }else if(req.url === '/contacto'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('<h1>Contacto</h1>')
    }else{
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('<h1>404 Not Found</h1>')
    }
}


server.listen(port, () => {
 console.log(`Server running at localhost:${port}`);
});