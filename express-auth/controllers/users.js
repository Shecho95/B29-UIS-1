const usersGet = (req, res) => {
    res.json({ msg: "get Products controller" });
}

const usersPost = (req, res) => {
    const { name, author } = req.body;

    res.json({ msg: "Post Products controller", name, author });
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