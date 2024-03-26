const express = require('express');
const { db } = require('./models/db');
const vol = require('./controllers/volController');
const destination = require('./controllers/destinationController')
const company = require('./controllers/companyController')

const app = express();
const PORT = 3000;

app.use(express.json());

db.sync()
.then(async () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
});