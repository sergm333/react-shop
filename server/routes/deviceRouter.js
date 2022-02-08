const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)  //для создания девайсов
router.get('/', deviceController.getAll)    //для получения девайсов
router.get('/:id', deviceController.getOne)    //для получения девайсов - конктетного

module.exports = router