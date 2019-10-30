const express = require('express');
const bodyParser = require('body-parser');

//setup express app
const app = express();

//initialize body parser
app.use(bodyParser.json());

//initialize routes
app.use('/api/', require("./routes/api"))

//listen to request
app.listen(process.env.port || 4000, function() {
    console.log("Now we are listining for request");
});