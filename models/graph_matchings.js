const mongoose = require('mongoose');
const {Schema} = mongoose;

const graph_matchingsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('graph_matchings', graph_matchingsSchema);