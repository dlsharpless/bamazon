const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/products", function (req, res) {
    db.Products.findAll({}).then(function (response, error) {
        if (error) {
            res.json(error)
        }
        res.json(response)
    })
});

router.get("/api/products/:id", function (req, res) {
    db.Products.findOne({
        where: {
            id: req.params.id
        },
        // include: [db.Products]
    }).then(function (dbPost) {
        res.json(dbPost);
    }).catch(function (error) {
        res.json({ error: error });
    });
});

router.post("/api/products", function (req, res) {
    db.Products.create(req.body).then(function (response, error) {
        if (error) {
            res.json(error)
        }
    })
    res.json(req.body)
});

module.exports = router;