const mongoose = require('mongoose');
const {Schema} = mongoose;

const chinese_remainder_theoremSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('chinese_remainder_theorem', chinese_remainder_theoremSchema);