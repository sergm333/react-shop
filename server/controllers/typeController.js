//добавим(свяжем) поля базы данных с этим файлом
const {Type} = require('../models/models') 

//добавим файл с функцией сообщения об ошибке
const ApiError = require('../error/ApiError');

//создадим функции по созданию, получению типов (товара, например)
class TypeController {
    async create(req, res) {
       const {name} = req.body
       const type = await Type.create({name})
       return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()