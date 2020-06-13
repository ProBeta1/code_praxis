const mongoose = require('mongoose');
const {Schema} = mongoose;

const geometrySchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('geometry', geometrySchema);