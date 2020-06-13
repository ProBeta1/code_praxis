const mongoose = require('mongoose');
const {Schema} = mongoose;

const constructive_algorithmsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('constructive_algorithms', constructive_algorithmsSchema);