const mongoose = require('mongoose');
const {Schema} = mongoose;

const bitmasksSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('bitmasks', bitmasksSchema);