const { query } = require('./../mysql');

module.exports = (router) => {
    router.get('/users', async (req, res) => {
        try {
            const users = await query(`SELECT user.*, organization.name AS organization_name FROM user LEFT JOIN organization 
            ON user.organization_id=organization.id`);
            const response = [];
            const dateToday = new Date();
            for (var i = 0; i < users.length; i++) {
                response[i] = {
                    id: users[i].id,
                    fullname: `${users[i].first_name} ${users[i].last_name}`,
                    age: dateToday.getFullYear() - users[i].birthday.getFullYear(),
                    birthday: users[i].birthday,
                    organization: users[i].organization_name
                };
            }
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch users from the database." });
        }
    });

    router.get('/user/:userId', async (req, res) => {
        try {
            const userID = req.params.userId;
            const users = await query(`SELECT user.*, organization.name AS organization_name FROM user LEFT JOIN organization 
            ON user.organization_id=organization.id WHERE user.id = ?`, [userID]);
            if (!users.length) {
                return res.status(404).json({ error: "User not found." });
            }
            const dateToday = new Date();
            const response = [{
                id:  users[0].id,
                fullname: `${users[0].first_name} ${users[0].last_name}`,
                age: dateToday.getFullYear() - users[0].birthday.getFullYear(),
                birthday: users[0].birthday,
                organization: users[0].organization_name
            }];
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch user from the database." });
        }
    });

    router.post('/users', async (req, res) => {
        try {
            if (!req.body.first_name || !req.body.last_name || !req.body.birthday || !req.body.organization_id) {
                return res.status(400).json({ error: "Missing required fields in the request body." });
            }
            const users = await query(`INSERT INTO user (first_name, last_name, birthday, organization_id) 
            VALUES(?, ?, ?, ?);`, 
            [req.body.first_name, req.body.last_name, req.body.birthday, req.body.organization_id]);

            const generatedUserID = users.insertId;
            const response = await query(`SELECT user.*, organization.name AS organization_name FROM user LEFT JOIN organization 
            ON user.organization_id=organization.id WHERE user.id = ?`, [generatedUserID]);
            res.status(201).json(response);
        } catch (error) {
            res.status(500).json({ error: "Failed to add user to the database."});
        }
    });

    router.put('/user/:userId', async (req, res) =>{
        try {
            const userID = req.params.userId;
            if (!req.body.first_name || !req.body.last_name || !req.body.birthday || !req.body.organization_id) {
                return res.status(400).json({ error: "Missing required fields in the request body." });
            }
            
            const users = await query(`UPDATE user SET first_name=?, last_name=?, birthday=?, organization_id=?
                WHERE id=?;`, [req.body.first_name, req.body.last_name, req.body.birthday, req.body.organization_id, userID]
            );
            
            const response = await query(`SELECT user.*, organization.name AS organization_name FROM user LEFT JOIN organization 
            ON user.organization_id=organization.id WHERE user.id = ?`, [userID]);

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: "Failed to update from the database." });
        }
    });
}
