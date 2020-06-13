const mongoose = require('mongoose');
const {Schema} = mongoose;

const number_theorySchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('number_theory', number_theorySchema);