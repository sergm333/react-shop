require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

//импортируем пакет загрузки файлов
const fileUpload = require('express-fileupload')

//импортируем основной роутер, собирающий остальные в корневой файл проекта
const router = require('./routes/index')

//импортируем (подключим) содержимое файла(функцию сообщения об ошибке в корневой файл проекта)
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

//подключим к файлу пакет для помощи перемещения выбранных картинок девайсов в папку static
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

//зарегистрируем пакет функциии загрузки файлов
app.use(fileUpload({}))

//зарегистрируем папку с файлами загрузки
app.use(express.static(path.resolve(__dirname, 'static')))

//передадим url и сам роутер в корневой файл проекта
app.use('/api', router)

//зарегистрируем сообщение об ошибке в корневой файл проекта
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on post ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()