const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// In-memory user storage (for demonstration purposes)
const users = [];

// Signup endpoint
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    // Check if the user already exists
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ error: 'Username already exists. Please choose a different username.' });
    }

    // Save the new user
    users.push({ username, email, password });
    res.status(200).json({ message: 'Registration successful! You can now log in.' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    // Check if the user exists
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
