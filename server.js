const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const settings = require('./settings');
const postRouter = require('./routes/post');

mongoose.connect(settings.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('MongoDB Connected!');
    }
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use('/posts', postRouter);

app.listen(settings.port, () => {
    console.log('Server is running on port: ' + settings.port);
});