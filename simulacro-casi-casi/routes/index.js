const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = req.session.user; // !!!!esto tambien, pilla el user, y luego adelante se lo pasa!!!!!
  res.render('index',{user: user});   //SE QUEDA SOLO ASI, SE QUEDA ASI
});

module.exports = router;