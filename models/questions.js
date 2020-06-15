const mongoose = require('mongoose');
const {Schema} = mongoose;

const questionsSchema = new Schema({
    contestId: Number,
    index: String,
    name: String,
    rating: Number,
    tags: String,
    url: String
})

mongoose.model('questions', questionsSchema);