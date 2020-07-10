const express = require('express');
const app = express();
const port = 4000;

const Users = [
    {
        Name: "Josh" ,
        Email: "joshemail",
        Password: "joshpassword"

    },
    {
        Name: "Kirsten" ,
        Email: "kirstenemail",
        Password: "kirstenpassword"

    },
    {
        Name: "Dave" ,
        Email: "daveemail",
        Password: "davepassword"

    },
    {
        Name: "Karen" ,
        Email: "karenemail",
        Password: "karenpassword"

    }
];

app.use(express.json());

app.get('/', (req, res) => res.send("Hello"));

app.get('/Users', (req, res) => res.send(Users));

app.post('/Users', (req, res) => {
    const body = req.body;
    Users.push(body)
    res.send(body)
});

// app.put('/Users/:userID', (req, res) => {
//     const index = req.params.userID;
//     const body = req.body;
//     res.send();   
// });

app.post('/Users/:userID', (req, res) => {
    const index = req.params.userID;
    const body = req.body;
    Users[index].name === body.name ? res.send("login successful"): res.send("login unsuccessful")
});

app.patch('/Users/:userID', (req, res) => {
    const index = req.params.userID;
    const body = req.body;
    const keys = Object.keys(body);
    keys.forEach(key => Users[index][key] = body[key]);
    res.send(Users[index]);
});

// app.delete('/Users/:userID', (req, res) => {
//     const index = req.params.userID;
//     const deletedUsers = Users[index];
//     Users.splice(index, 1);
//     res.send(deletedUsers);
// });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));