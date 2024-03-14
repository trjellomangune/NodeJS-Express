const express = require('express');
const router = require('./router');

const server = express();

server.use(express.json());

router(server);

const port = 3000;

server.listen(port, () => console.log(`Listening to localhost:${port}`));





// server.get('/users', async (req, res) => {
//     const users = await query('SELECT * FROM user');

//     res.json(users);
// });

// server.get('/user/:userId', (req, res) => {
//    const selectedUser = users.find(users => users.id == req.params.userId);
//    res.json(selectedUser);
// })

// server.post('/user/:userId', (req, res) => {
//     users.push(req.body);
//     res.status(200).json({message: "Success"});
// })

// // server.put('/user/:userId', (req, res) =>{
// //     const selectedUser = users.find(users => users.id == req.params.userId);
// //     selectedUser.name = req.body.name;
// //     res.json(selectedUser)
    
// // })

// server.put('/user/:userId', (req, res) =>{
//     const selectedUser = users.findIndex(user => user.id == req.params.userId);
//     users[selectedUser] = {...users[selectedUser], ...req.body}
//     res.status(200).json({message: "Success"});
// })

