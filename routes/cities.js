const express = require ('express')
const router = express.Router()
const controllers = require('../controllers/cityController')
const auth = require('../middleware/auth')
const authorize = require('../middleware/authorize')

router.get('/', controllers.getCities)
router.get('/:id', controllers.getCityById)
router.post('/', auth, authorize(3), controllers.postCity)
router.put('/:id', auth, authorize(3), controllers.editCity)
router.delete('/:id', auth, authorize(3), controllers.deleteCity)

module.exports = router