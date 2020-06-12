const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    user_id : String , 
    cf_handle : String,
    password : String ,

})

mongoose.model('uesrs', userSchema);
