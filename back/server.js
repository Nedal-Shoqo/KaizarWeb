
const express = require('express');
const app = express();
const UserRoute  = require('./Routes/UserRoutes.js')
const cors = require('cors')

app.use(express.json())
app.use(cors())



app.get('/Cart' , (req,res) =>
{
    console.log("Testing back")
})

const Port = 3000;



app.post('/Register' , UserRoute)

const db = require('./models');

db.sequelize.sync().then(()=>{app.listen(Port , ()=>{console.log(`Server is On Port ${Port}` ) });
})
 