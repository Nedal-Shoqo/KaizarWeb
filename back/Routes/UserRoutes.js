const express = require('express');
const Router = express.Router();


const UserController =require('../Controller/UserCon.js');


Router.post('/Register' , UserController.createUser);
Router.post('/Login' , UserController.loginUser);
Router.get('/' , UserController.getUsers)

module.exports=Router;