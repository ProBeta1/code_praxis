const mongoose = require('mongoose');
const {Schema} = mongoose;

const dfs_and_similarSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('dfs_and_similar', dfs_and_similarSchema);