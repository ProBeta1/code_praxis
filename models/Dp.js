const mongoose = require('mongoose');
const {Schema} = mongoose;

const dpSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('dp', dpSchema);