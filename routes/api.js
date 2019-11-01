const express = require('express');
const Member = require('../models/scanner')
const router = express.Router();
const sha = require('sha256');


//Verify authentication
router.get("/scanner/:key", async(req, res, next) => {
    const data = await Member.find({});
    const key = req.params.key;
    Member.findOne({ key: req.params.key }).then(function(member) {
        if (member) {
            if (member.hash == sha(req.params.key)) {
                res.send(member)
            } else {
                res.send("Authentication unsuccessful")
            }
        } else {
            res.send("Member not found in Database")
        }
    }).catch(function(err) {
        res.send(err)
    })
});

router.post("/scanner", function(req, res, next) {
    Member.create(req.body).then(function(member) {
        res.send(member);
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