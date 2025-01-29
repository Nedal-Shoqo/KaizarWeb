
const express = require('express');
const app = express();



console.log(" hello world")


app.get('/Cart' , (req,res) =>
{
    console.log("Testing back")
})

const Port = 3000;

app.listen(Port , ()=>{ `Server is On Port ${Port}` });
 