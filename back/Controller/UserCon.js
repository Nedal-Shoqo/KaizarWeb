const {User} = require('../models');

console.log("test")
exports.createUser = async (req, res) => {
    try {
        const {fullname, email, password , phoneNumber } = req.body;

        console.log(fullname,email,password,phoneNumber)

        const newUser = await User.create({ fullname, email, password , phoneNumber });
        res.status(201).json({ message: 'User created', user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message  });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};