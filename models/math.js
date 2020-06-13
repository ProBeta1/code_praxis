const mongoose = require('mongoose');
const {Schema} = mongoose;

const mathSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('math', mathSchema);