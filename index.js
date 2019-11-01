const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
    //setup express app
const app = express();
app.use(cors())

//connect to mongodb
mongoose.connect(`mongodb+srv://rahul:rahulis1@cluster0-i3ihc.gcp.mongodb.net/test?retryWrites=true&w=majority`)
mongoose.connection.once('open', () => {
    console.log("connected to db")
})
mongoose.Promise = global.Promise

//initialize body parser
app.use(bodyParser.json());

//initialize routes
app.use('/api/', require("./routes/api"))

//error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message });
});

//listen to request
app.listen(process.env.PORT || 4000, function() {
    console.log("Now we are listining for request");
});