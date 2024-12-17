const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

// Importación de Rutas
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const tiendaRouter = require('./routes/tienda');
const restrictedRouter = require('./routes/restricted');

const app = express();

// Configuración del Motor de Vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuración de Variables Globales
app.locals.title = "Embutidos Leon";
// Variable de entorno global de cookies
app.locals.cookie = false;

// Middlewares Básicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Servir Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar Sesión (si aún la necesitas para otras funcionalidades)
app.use(session({
  secret: "Una frase muy secreta",
  resave: false,
  saveUninitialized: true
}));

// Middleware para Manejar Mensajes y Errores en la Sesión
app.use((req, res, next) => {
  const message = req.session.message;
  const error = req.session.error;
  delete req.session.message;
  delete req.session.error;
  res.locals.message = "";
  res.locals.error = "";
  if (message) res.locals.message = `<p>${message}</p>`;
  if (error) res.locals.error = `<p>${error}</p>`;
  next();
});

// ========================
// Rutas para Manejo de Cookies
// ========================

// Ruta para Comprobar si las Cookies Han Sido Aceptadas
app.get('/check-cookies', (req, res) => {
  const cookiesAccepted = req.cookies.acceptedCookies === 'true';
  res.json({ cookiesAccepted });
});

// Ruta para Aceptar las Cookies
app.post('/accept-cookies', (req, res) => {
  // Establece una cookie 'acceptedCookies' que expira en un año
  // res.cookie('acceptedCookies', 'true', {
  //   httpOnly: true, // No accesible desde el cliente
  //   maxAge: 365 * 24 * 60 * 60 * 1000 // 1 año en milisegundos
  // });
  app.locals.cookie = true;
  res.sendStatus(200);
});

// Ruta Opcional para Manejar la Rechazo de Cookies
app.get('/cookies-rejected', (req, res) => {
  // Puedes personalizar esta ruta según tus necesidades
  res.sendStatus(200);
});

// ========================
// Rutas Principales
// ========================
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/tienda', tiendaRouter);
app.use('/restricted', restricted, restrictedRouter);

// ========================
// Ruta para Cerrar Sesión (Logout)
// ========================
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("==> Error al destruir la sesión:", err);
      // Manejar el error según sea necesario
      return res.status(500).send("Error al cerrar sesión.");
    }
    res.clearCookie('connect.sid'); // Limpia la cookie de sesión
    console.log("==> El usuario ha cerrado sesión.");
    res.redirect('/'); // Redirige a la página de inicio
  });
});

// Middleware para Restringir Acceso a Rutas Protegidas
function restricted(req, res, next){
  if(req.session.user){
    next();
  } else {
    res.redirect("/login");
  }
}

// ========================
// Manejo de Errores
// ========================

// Catch 404 y Pasar al Error Handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error Handler
app.use(function(err, req, res, next) {
  // Solo proporcionar detalles del error en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar la Página de Error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
