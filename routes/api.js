const express = require('express');
const router = express.Router();


//Verify authentication
router.get("/scanner", function(req, res) {
    res.send({ type: 'GET' });
});

router.post("/scanner", function(req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name
    });
});

module.exports = router