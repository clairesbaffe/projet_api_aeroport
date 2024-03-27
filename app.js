const express = require('express');
const { db } = require('./models/db');

const destinationRoute = require('./routes/destinationRoute');
const companyRoute = require('./routes/companyRoute');
const flightRoute = require('./routes/flightRoute');
const {addDestinationToCompany} = require('./services/companyService');
const { addCompanyToDestination } = require('./services/destinationService');

const app = express();
const PORT = 3000;

app.use(express.json());


app.use("/api/v1/destinations", destinationRoute);
app.use("/api/v1/companies", companyRoute);
app.use("/api/v1/flights", flightRoute);

db.sync()
.then(async () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
        // addDestinationToCompany(1, 2);
        // addDestinationToCompany(2, 1);
        // addCompanyToDestination({
        //     "destinationId": 2,
        //     "companyId": 1
        // });
    
    })
});