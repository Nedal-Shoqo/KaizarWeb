require('dotenv').config();
const express = require('express');
const app = express();
const UserRoute  = require('./Routes/UserRoutes.js')
const cors = require('cors')
const jwt = require('jsonwebtoken');

app.use(express.json())
app.use(cors())
const Port = 3000;


app.get('/', authenticateToken, (req, res) => {
    res.json(req.email);
  });
  


app.post('/Register' , UserRoute)

app.post('/Login' , UserRoute)

const db = require('./models');



function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.email = email
      next()
    })
  }


db.sequelize.sync().then(()=>{app.listen(Port , ()=>{console.log(`Server is On Port ${Port}` ) });
})
 