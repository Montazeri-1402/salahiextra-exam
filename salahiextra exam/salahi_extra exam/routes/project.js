var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const fullpro = [{ id: 1, title: "pro1" }, { id: 2, title: "pro2" }, { id: 3, title: "pro3" }]
    res.send(fullpro)
});

module.exports = router;