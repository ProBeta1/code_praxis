const mongoose = require('mongoose');
const {Schema} = mongoose;

const meet_in_the_middleSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('meet_in_the_middle', meet_in_the_middleSchema);