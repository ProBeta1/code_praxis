const mongoose = require('mongoose');
const {Schema} = mongoose;

const graphsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('graphs', graphsSchema);