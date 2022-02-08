const Router = require('express')
const router = new Router()
//импортируем контроллер, созданный для этого файла
const userController = require('../controllers/userController')
//импортируем проверку авторизации пользователя
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)  //для регистрации
router.post('/login', userController.login)    //для авторизации
router.get('/auth', authMiddleware, userController.check)    //для проверки авторизации

module.exports = router