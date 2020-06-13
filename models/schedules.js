const mongoose = require('mongoose');
const {Schema} = mongoose;

const schedulesSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('schedules', schedulesSchema);