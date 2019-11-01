const express = require('express');
const Member = require('../models/scanner')
const router = express.Router();
const sha = require('sha256');


//Temp method to see content of database
router.get("/scanner", async(req, res, next) => {
    const data = await Member.find({});
    res.json(data);
});

//Verify authentication
router.get("/scanner/:key", async(req, res, next) => {
    const data = await Member.find({});
    const key = req.params.key;
    Member.findOne({ key: req.params.key }).then(function(member) {
        if (member) {
            if (member.hash == sha(req.params.key)) {
                member["authentication"] = "successful"
                res.send(member)
            } else {
                member["authentication"] = "unsuccessful"
                res.send(member)
            }
        } else {
            res.send({ "authentication": "unsuccessful" })
        }
    }).catch(function(err) {
        res.send(err)
    })
});

router.post("/scanner", function(req, res, next) {
    let key = req.body.key;
    let hash = sha(key);
    let obj = req.body;
    obj["hash"] = hash;
    Member.create(obj).then(function(member) {
        res.send(obj);
    }).catch(next);
});

router.put("/scanner/:id", function(req, res, next) {
    Member.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(member) {
        Member.findOne({ _id: req.params.id }).then(function(member) {
            res.send(member)
        })
    });
});

router.delete("/scanner/:id", function(req, res, next) {
    Member.findByIdAndDelete({ _id: req.params.id }).then(function(member) {
        res.send(member)
    });
});

module.exports = router