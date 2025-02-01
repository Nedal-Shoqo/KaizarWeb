const {User} = require('../models');
 const bcrypt = require('bcryptjs');
 require('dotenv').config()
console.log("test")

const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {


   
    async function hashPassword(passwordHash) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(passwordHash, saltRounds);
        return hashedPassword;
    }


    try {
        const {fullname, email, password , phoneNumber } = req.body;
        console.log(fullname,email,password,phoneNumber)

         const hashedPassword=await hashPassword(password);


        console.log(";",hashedPassword, " ;")

        const newUser = await User.create({ fullname, email, password:hashedPassword , phoneNumber });
        res.status(201).json({ message: 'User created', user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message  });
    }
};

async function verifyPassword(inputPassword, hashedPassword) {
    return await bcrypt.compare(inputPassword, hashedPassword);
}

exports.loginUser = async (req, res) => {


    try {
        const {email, password  } = req.body;
        console.log(email,password)
        
       
        const user = await User.findOne({ where: { email: email , password: password }  });
         if (verifyPassword(password , user.password )){
            const accessToken= jwt.sign(user.email , process.env.ACCESS_TOKEN_SECRET);
            
            res.status(201).json({ accessToken:accessToken,message: 'User LoggedIn', useR: user } );
         }
         else {
            return  res.status(401).json({ message: 'User Cant LogIn , WrongPass'});
         }

    } catch (err) {
        res.status(500).json({ error: err.message  });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {

     const user = await User.findOne({ where: { email: req.email }  });
     res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};