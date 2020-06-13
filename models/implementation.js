const mongoose = require('mongoose');
const {Schema} = mongoose;

const implementationSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('implementation', implementationSchema);