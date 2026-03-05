const express = require('express');
const app = express();
let port = 4000;

app.use(express.json());

app.get('/welcome/:username', (req, res) => {

    // Extract route parameter
    const username = req.params.username;

    // Extract query parameter
    const role = req.query.role;

    // If role is not provided
    if (!role) {
        return res.send(`Welcome ${username}`);
    }

    // Send personalized response
    res.send(`Welcome ${username}, your role is ${role}`);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});