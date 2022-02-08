const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

router.post('/', brandController.create)  //для создания брендов
router.get('/', brandController.getAll)    //для получения брендов

module.exports = router