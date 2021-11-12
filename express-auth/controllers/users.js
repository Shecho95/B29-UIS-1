const {response, request} = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const usersGet = async (req = request, res = response) => {
    const { limit = 5, page = 1 } = req.query;
    const query = { status: true };

    const skip = limit * (page - 1);

    const [ users, totalUsers ] = await Promise.all([
                                                User.find(query)
                                                    .skip(Number(skip))
                                                    .limit(Number(limit)),
                                                User.countDocuments(query)
                                            ]);

    res.json({
        users,
        totalUsers
    });
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

const usersPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, ...data } = req.body;

    if(password){
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, data, { new: true });

    res.json(user);
}

const usersDelete = async (req, res) => {
    const { id } = req.params;

    // Eliminación fisica de registros en db
    // const user = await User.findByIdAndDelete( id );

    const user = await User.findByIdAndUpdate(id, { status: false });

    res.json(user);
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}