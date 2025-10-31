const express = require('express')
const router = express.Router()
const controller = require('../controllers/jobController')
const auth = require('../middleware/auth')
const authorize = require('../middleware/authorize')

router.get('/', controller.getJobs)
router.get('/user/:id_user', auth, authorize(3, 2), controller.getAllJobsUser)
router.get('/:id', controller.getJobById)
router.get('/company/:company_id', controller.getJobByCompanyId)
router.post('/', auth, authorize(3, 2), controller.postJob)
router.put('/:id', auth, authorize(3), controller.putJob)
router.put('/user/:id/:user_id', auth, authorize(2), controller.putJobUser)
router.delete('/:id', auth, authorize(3), controller.deleteJob)
router.delete('/user/:id/:id_user', auth, authorize(2), controller.deleteJobUser)

module.exports = router