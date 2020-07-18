const mongoose = require('mongoose');
const {Schema} = mongoose;

const upsolveSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('upsolve', upsolveSchema);