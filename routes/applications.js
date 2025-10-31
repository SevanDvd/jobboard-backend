const express = require('express')
const router = express.Router()
const controller = require('../controllers/applicationController')
const auth = require('../middleware/auth')
const authorize = require('../middleware/authorize')

//3 Admin
//2 Recruiter
//1 User

router.get('/', auth, authorize(3), controller.getApplications)
//for advertisersS
router.get('/advertiser/:id_advertiser', auth, authorize(3, 2), controller.getApplicationsAdvertiser)
//for users
router.get('/user', auth, authorize(3, 1), controller.getApplicationsUser)
router.get('/:id', auth, authorize(3), controller.getApplicationById)
router.post('/', controller.postApplication)
router.put('/:id', auth, authorize(3), controller.putApplication)
router.put('/', auth, authorize(3,2,1), controller.putApplicationUser)
router.delete('/:id', auth, authorize(3), controller.deleteApplication)

module.exports = router
