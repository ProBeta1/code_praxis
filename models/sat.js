const mongoose = require('mongoose');
const {Schema} = mongoose;

const satSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('sat', satSchema);