const express = require('express')
const router = express.Router()
const controller = require('../controllers/companyController')
const auth = require('../middleware/auth')
const authorize = require('../middleware/authorize')

router.get('/', controller.getCompanies)
router.get('/:id',  auth, authorize(3), controller.getCompanyById)
router.post('/', controller.postCompany)
router.put('/:id', auth, authorize(3), controller.putCompany)
router.delete('/:id', auth, authorize(3), controller.deleteCompany)

module.exports = router