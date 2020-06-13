const mongoose = require('mongoose');
const {Schema} = mongoose;

const gamesSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('games', gamesSchema);