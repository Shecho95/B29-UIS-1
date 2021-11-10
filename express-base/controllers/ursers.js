const data = [
    { cc: "1234567890", name: "Hernan" },
    { cc: "56789801234", name: "Lupe" },
    { cc: "1234521567", name: "Felix" }
]

function getUserByCC(cc){
    return data.find(u => u.cc == cc);
}

const usersGet = (req, res) => {
    res.send(data);
}

const usersPost = (req, res) => {
    const user = {
        cc: req.body.cc,
        name: req.body.name
    }

    data.push(user)

    res.send(data);
}

const usersGetByCC = (req, res) => {
    res.send(data);
}

const usersPut = (req, res) => {
    res.send(data);
}

const usersDelete = (req, res) => {
    const user = getUserByCC(req.params.cc);

    if(!user){
        res.status(404).send(`User with cc ${ req.params.cc } not found`);
        return;
    }

    const indexUser = data.indexOf(user);
    data.splice(indexUser, 1);

    res.send({
        removeItem: user,
        data
    });
}

module.exports = {
    usersGet, usersPost, usersGetByCC, usersPut, usersDelete
}