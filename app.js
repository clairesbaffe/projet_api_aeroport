const express = require('express');
const { db } = require('./models/db');

const destinationRoute = require('./routes/destinationRoute');
const companyRoute = require('./routes/companyRoute');
const volRoute = require('./routes/volRoute');

const app = express();
const PORT = 3000;

app.use(express.json());


app.use("/api/v1/destinations", destinationRoute);
app.use("/api/v1/companies", companyRoute);
app.use("/api/v1/vols", volRoute);

db.sync()
.then(async () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
});