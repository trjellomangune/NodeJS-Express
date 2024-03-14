const { query } = require('./../mysql');

module.exports = (router) => {
    router.get('/organizations', async (req, res) => {
        try {
            const organizations = await query(`SELECT * FROM organization`);
            res.status(200).json(organizations);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch organizations from the database."});
        }
    });

    router.get('/organization/:organizationId', async (req, res) => {
        try {
            const organizationID = req.params.organizationId;
            const organization = await query(`SELECT * FROM organization WHERE id = ?`, [organizationID]);
            if (!organization.length) {
                return res.status(404).json({ error: "Organization not found." });
            }
            res.status(200).json(organization);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch organization from the database." });
        }
    });

    router.post('/organizations', async (req, res) => {
        try {
            if (!req.body.name) {
                return res.status(400).json({ error: "Missing required fields in the request body." });
            }
            const organization = await query(`INSERT INTO organization (name) VALUES(?);`, [req.body.name]);
            const generatedOrganizationID = organization.insertId;
            const response = await query(`SELECT * FROM organization WHERE id = ?`, [generatedOrganizationID]);
            res.status(201).json(response);
        } catch (error) {
            res.status(500).json({ error: "Failed to add organization to the database." });
        }
    });

    router.put('/organization/:organizationId', async (req, res) =>{
        try {
            if (!req.body.name) {
                return res.status(400).json({ error: "Missing required fields in the request body." });
            }
            const organizationID = req.params.organizationId;
            const organization = await query(`UPDATE organization SET name=? WHERE id=?;`, [req.body.name, organizationID]);
            const response = await query(`SELECT * FROM organization WHERE id = ?`, [organizationID]);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: "Failed to update the organization from the database." });
        }
    });
}
