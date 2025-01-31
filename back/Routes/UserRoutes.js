const express = require('express');
const Router = express.Router();


const UserController =require('../Controller/UserCon.js');


Router.post('/Register' , UserController.createUser);


module.exports=Router;