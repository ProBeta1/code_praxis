const mongoose = require('mongoose');
const {Schema} = mongoose;

const ternary_searchSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('ternary_search', ternary_searchSchema);