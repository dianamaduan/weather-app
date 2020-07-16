const { Router } = require('express')
const router = Router()
const weatherController = require('../controllers/weatherController')

router.get('/getWeatherInfo/:city', weatherController.getInfoByCityName);
module.exports = router
