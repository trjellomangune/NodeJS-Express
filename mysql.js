// Get the client
const mysql = require('mysql2/promise');

const query = async(que, values) => {
    // Create the connection to database
    const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_training',
    password: 'Password123!'
    });

    try {
        const [ results ] = await connection.query(que, values);
        return results;
    } catch (err) {
    console.log(err);
    }

}

module.exports = { query };
  

