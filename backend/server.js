const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/router'); // Assuming your router file is in './routes/router.js'
const { MongoClient } = require('mongodb');



const app = express();
const port = 8000;


const uri = "mongodb+srv://mimach2002:Yearofrabbit23*@dividewell.clfma79.mongodb.net/DivideWell?retryWrites=true&w=majority";
const client = new MongoClient(uri);


async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    // Proceed with additional operations like database listing, data insertion, etc.
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

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
