const express = require('express')
const router = express.Router()
const controller = require('../controllers/peopleController')
const auth = require('../middleware/auth')
const authorize = require('../middleware/authorize')

router.get('/', auth, authorize(3), controller.getAllPeople)
router.get('/:id', controller.getPeople)
router.post('/', controller.postPeople)
router.put('/:id', auth, authorize(3), controller.editPeople)
router.put('/', auth, authorize(3,2,1), controller.editPeopleUser)
router.delete('/:id', auth, authorize(3), controller.deletePeople)
router.delete('/', auth, authorize(3,2,1), controller.deletePeopleUser)

module.exports = router