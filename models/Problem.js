const mongoose = require('mongoose');
const {Schema} = mongoose;

const problemSchema = new Schema({
    name: String,
    url: String,
})

mongoose.model('problems', problemSchema);