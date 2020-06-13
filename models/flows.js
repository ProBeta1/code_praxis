const mongoose = require('mongoose');
const {Schema} = mongoose;

const flowsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('flows', flowsSchema);