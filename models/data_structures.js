const mongoose = require('mongoose');
const {Schema} = mongoose;

const data_structuresSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('data_structures', data_structuresSchema);