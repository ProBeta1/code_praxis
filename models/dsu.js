const mongoose = require('mongoose');
const {Schema} = mongoose;

const dsuSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('dsu', dsuSchema);