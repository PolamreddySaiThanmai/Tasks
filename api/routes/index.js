const express = require('express')
const router = express.Router()

const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')
const createController = require('../controllers/createController')
const readController = require('../controllers/readController')
const updateController = require('../controllers/updateController')
const deleteController = require('../controllers/deleteController')


router.route('/register').post(registerController.register)
router.route('/login').post(loginController.login)

// every body can access  with token
router.route('/create').post(loginController.isAuthenticated, createController.create)
router.route('/read').get(loginController.isAuthenticated, readController.read)

// only admin
router.route('/update/:id').post(loginController.isAuthenticated, loginController.isAdmin, updateController.update)
router.route('/delete/:id').delete(loginController.isAuthenticated, loginController.isAdmin, deleteController.delete)


module.exports = router