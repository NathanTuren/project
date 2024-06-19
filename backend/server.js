const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router'); // Assuming your router file is in './routes/router.js'

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatue: 200
};

app.use(cors());
app.use('/', router); // Mount the router at the root path '/'

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
