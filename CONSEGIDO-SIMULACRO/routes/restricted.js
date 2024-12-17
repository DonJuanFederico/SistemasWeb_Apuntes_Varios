const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const user = req.session.user; // !!!!esto tambien, pilla el user, y luego adelante se lo pasa!!!!!
  res.render('restricted',{user: user}); //SE QUEDA SOLO ASI EJERCICIO 1
});

module.exports = router;
