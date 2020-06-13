const mongoose = require('mongoose');
const {Schema} = mongoose;

const binary_searchSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('binary_search', binary_searchSchema);