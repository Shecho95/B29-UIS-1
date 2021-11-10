const express = require('express');
const app = express();
const port = 5000;

app.use(express.json())

const { usersGet, 
        usersPost,
        usersGetByCC,
        usersPut, 
        usersDelete 
    } = require('./controllers/ursers')

app.get('/users', usersGet);

app.post('/users', usersPost);

app.get('/users/:cc', usersGetByCC);

app.put('/users/:cc', usersPut);

app.delete('/users/:cc', usersDelete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});