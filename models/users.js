const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    cf_handle: String,
})

mongoose.model('users', userSchema);