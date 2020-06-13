const mongoose = require('mongoose');
const {Schema} = mongoose;

const string_suffix_structuresSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('string_suffix_structures', string_suffix_structuresSchema);