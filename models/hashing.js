const mongoose = require('mongoose');
const {Schema} = mongoose;

const hashingSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('hashing', hashingSchema);