const mongoose = require('mongoose');
const {Schema} = mongoose;

const combinatoricsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('combinatorics', combinatoricsSchema);