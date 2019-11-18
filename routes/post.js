const express = require('express');
const postModel = require('../models/post');
const router = express.Router();

router.get('/', (req, res) => {
    //let mdl = new postModel({text: "me"});
    // mdl.save((err) => {
    //     if(err) console.log(err);
    //     console.log("saved");
    // });

    postModel.find((err, data) => {
        if(err){
            console.log(err);
            res.status(522);
            res.send(err);
        } else {
            res.status(200);
            res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    const post = new postModel({author: req.body.author, title: req.body.title, text: req.body.text});
    post.save((err) => {
        if(err){
            console.log(err);
        }
        console.log('document saved');
        res.status(200);
    })
    res.status(500);
});



module.exports = router;