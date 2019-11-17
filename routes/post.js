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



module.exports = router;