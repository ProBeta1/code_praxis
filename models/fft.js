const mongoose = require('mongoose');
const {Schema} = mongoose;

const fftSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('fft', fftSchema);