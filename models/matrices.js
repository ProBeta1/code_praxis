const mongoose = require('mongoose');
const {Schema} = mongoose;

const matricesSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('matrices', matricesSchema);