const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken");

//logic methods:
const logic = require("../logic/index");

//get policy by email:
router.get('/email=:email', async (req, res) => {
    const { params: { email }} = req;

    try {
        if(!email) {
            res.status(400).send({error: "Bad request or invalid policy email"});
            return;
        }

        let policy = await logic.findPolicyByEmail(email);

        if(!policy) {
            res.status(404).send({error: "Policy not found!"});
            return;
        }
        
        res.status(200).json({ policy });
        console.log({policy})

    } catch(err) {
        res.status(500).send({error: err});
    }
});

//get policies by client ID:
router.get('/clientId=:id', async (req, res) => {
    const { params: { id }} = req

    try {
        if(!id) {
            res.status(400).send({error: "Bad request or invalid client ID"});
            return;
        }

        let policies = await logic.findPoliciesByClientId(id);

        if(!policies) {
            res.status(404).send({error: "Policies not found!"});
            return;
        }

        res.status(200).json({ policies })

    } catch(err) {
        res.status(500).send({error: err});
    }
});

module.exports = router;


