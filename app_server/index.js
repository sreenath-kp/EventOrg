const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const pool = require("./db");


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));






app.get('/', async (req, res) => {

});



app.post("/register", async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Please provide valid username, password, and email.' });
    }


    const query = {
        text: 'INSERT INTO user_list (username, password) VALUES ($1, $2)',
        values: [username, password],
    };

    await pool.query(query);
    res.status(201).json({ message: 'Registration successful' });
});



app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Query the database to retrieve user data
        const query = {
            text: 'SELECT id, username, password FROM users WHERE username = $1',
            values: [username],
        };

        const result = await pool.query(query);

        // Check if a user with the provided username exists
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = result.rows[0];

        // Compare the hashed password with the provided password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Passwords match; generate a JWT token
            const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret);

            res.json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Login failed' });
    }
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});