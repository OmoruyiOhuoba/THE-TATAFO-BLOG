const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const article = require("../models/articlesschema");


router.route("/addarticle").post((req, res, next) => {
    return article.create(req.body, (error, data) => {
        if(error){
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.route("/").get((req, res)=> {
    return article.find((error, data) => {
        if(error){
            return next (error);
        } else {
            return res.json(data);
        }
    });
});


router.route("/edit/:id").get((req,res) => {
    return article.findById(req.params.id, (error, data) => {
        if (error){
            return next (error);
        } else {
            return res.json(data);
        }
    });
});

router.route('/update/:id').put((req, res, next) => {
    article.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
             next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route("/delete/:id").delete((req, res, next) => {
    return article.findByIdAndRemove(req.params.id, (error, data) => {
        if (error){
            return next(error);
        } else{
            return res.status(200).json({
                msg: data
            })
        } 
    })
})

module.exports = router;