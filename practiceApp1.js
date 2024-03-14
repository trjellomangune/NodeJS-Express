const http = require('http');

const users = [
    {
        id: 1,
        name: 'Jello'
    },
    {
        id: 2,
        name: 'Van'
    },
    {
        id: 3,
        name: 'Kane'
    },
    {
        id: 4,
        name: 'Jonel'
    }
]

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url == '/users' && req.method == 'GET'){
        let jsonData = JSON.stringify(users);
        res.write(jsonData);
        res.end();
    }

    const urlParts = req.url.split('/');
    if(urlParts[1] == 'user' && req.method == 'GET'){
        const userId = urlParts[2] - 1;
        // res.write(userId);
        const user = users[userId];
        let jsonData = JSON.stringify(user);
        res.write(jsonData);
        res.end();
    }
});

const port = 3000;

server.listen(port, () => console.log(`Listening to port ${port}`));