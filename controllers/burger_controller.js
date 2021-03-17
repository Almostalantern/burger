var express = require("express");
var burger = require("../models/burger")

var router = express.Router();

router.get("/", function(req,res){
    burger.all(function(data){
        console.log(data)
        res.render("index", {
            burger: data,

        })
    })
});
router.put("/burgers/:id", function(req,res){
    burger.update(req.params.id, function(data){
        console.log(data);
        res.sendStatus(200);

    })
})
// router.post("/api/burgers", function(req,res){
//     console.log(req.body)
//     burger.create(req.body.newBurger, function(){
//         return res.json(newBurger)
//     }).catch(err => res.status(500).json(err))
// });

router.post("/api/burgers", function(req,res){
    console.log(req.body)
    burger.create(["burger_name"],[
        req.body.name
    ], function(result){
        res.json({ id: result.insertId })
    });
});


module.exports = router