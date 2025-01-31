
const express = require('express');
const app = express();



console.log(" hello world")


app.get('/Cart' , (req,res) =>
{
    console.log("Testing back")
})

const Port = 3000;



const db = require('./models');

db.sequelize.sync().then((req)=>{app.listen(Port , ()=>{console.log(`Server is On Port ${Port}` ) });
})
 