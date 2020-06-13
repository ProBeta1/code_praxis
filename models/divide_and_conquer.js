const mongoose = require('mongoose');
const {Schema} = mongoose;

const divide_and_conquerSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('divide_and_conquer', divide_and_conquerSchema);