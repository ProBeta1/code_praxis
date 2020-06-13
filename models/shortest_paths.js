const mongoose = require('mongoose');
const {Schema} = mongoose;

const shortest_pathsSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('shortest_paths', shortest_pathsSchema);