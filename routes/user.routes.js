const express = require('express');

const userController= require('../controllers/user.controller')

const useRouter=express.Router();

useRouter.post('/signup',userController.signup)
useRouter.post('/login',userController.login) 

useRouter.get('/:id/history',userController.userTransaction)


module.exports=useRouter

