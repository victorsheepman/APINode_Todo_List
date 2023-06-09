const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name: {
        type:String
    },
    age: {
        type:Number
    },
    email: {
        type:String
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model('users', UserScheme)