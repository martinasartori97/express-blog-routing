
const express = require('express')
const router = express.Router()

module.exports = router


router.get('/pizze', PizzaController.index);
router.get('/pizze/:id', PizzaController.show);