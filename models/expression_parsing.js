const mongoose = require('mongoose');
const {Schema} = mongoose;

const expression_parsingSchema = new Schema({
    contestId: Number,
    name: String,
    index:String,
    rating:Number,
})

mongoose.model('expression_parsing', expression_parsingSchema);