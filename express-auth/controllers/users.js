const bcrypt = require('bcryptjs');

const User = require('../models/user');

const usersGet = (req, res) => {
    res.json({ msg: "get Products controller" });
}

const usersPost = async (req, res) => {
    const { name, email, password, rol } = req.body;

    const user = new User({ name, email, password, rol });

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({ user });
}

const usersGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU Products controller" });
}

const usersPut = (req, res) => {
    res.json({ msg: "put Products controller" });
}

const usersDelete = (req, res) => {
    res.json({ msg: "delete Products controller" });
}

module.exports = {
    usersPost
}