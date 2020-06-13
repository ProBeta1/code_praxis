const mongoose = require('mongoose');
const {Schema} = mongoose;

const two_pointersSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('two_pointers', two_pointersSchema);