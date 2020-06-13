const mongoose = require('mongoose');
const {Schema} = mongoose;

const sortingsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('sortings', sortingsSchema);