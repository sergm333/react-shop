const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')

//импортируем проверку на администратора для создания типов товаров
const chekRole = require('../middleware/checkRoleMiddleware')

router.post('/', chekRole('ADMIN'), typeController.create)  //для создания типов
router.get('/', typeController.getAll)    //для получения типов

module.exports = router