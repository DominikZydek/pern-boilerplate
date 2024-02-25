const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});