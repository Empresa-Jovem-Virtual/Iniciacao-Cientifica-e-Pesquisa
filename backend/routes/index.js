var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Iniciação Científica & Pesquisa' });
});

module.exports = router;
// ES6
// export default router