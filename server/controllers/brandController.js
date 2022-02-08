//добавим(свяжем) поля базы данных с этим файлом
const {Brand} = require('../models/models') 

//добавим файл с функцией сообщения об ошибке
const ApiError = require('../error/ApiError');

//создадим функции по созданию, получению типов(брэндов) (товара, например)
class BrandController {
    async create(req, res) {
       const {name} = req.body
       const brand = await Brand.create({name})
       return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BrandController()