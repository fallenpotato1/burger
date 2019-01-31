var express = require("express")
var burgers = require("../models/burger")
var router = express.Router()

router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var theObject = {
            burger: data
        }
        res.render("index", theObject)
    })
})

router.post("/burger", function (req, res) {
    burgers.insertOne([req.body.burger], function (results) {
        res.json({id : results.id})
    })
})
module.exports = router