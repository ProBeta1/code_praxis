const mongoose = require('mongoose');
const {Schema} = mongoose;

const treesSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('trees', treesSchema);