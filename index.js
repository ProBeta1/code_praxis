const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://probeta:poAtlNn5eHH2Mq1B@cluster0-hsbmq.gcp.mongodb.net/users?retryWrites=true&w=majority",{useNewUrlParser: true});

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});