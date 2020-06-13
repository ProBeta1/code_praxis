const mongoose = require('mongoose');
const {Schema} = mongoose;

const greedySchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('greedy', greedySchema);