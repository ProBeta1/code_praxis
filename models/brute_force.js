const mongoose = require('mongoose');
const {Schema} = mongoose;

const brute_forceSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('brute_force', brute_forceSchema);