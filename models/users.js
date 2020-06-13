const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    cf_handle: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true}
})

mongoose.model('users', userSchema);