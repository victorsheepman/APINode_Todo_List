const mongoose = require('mongoose');

const NoteScheme = new mongoose.Schema({
    content: {
        type:String,
        required:true,
        minlength: 5,
    },
    done: {
        type:Boolean
    },
},
{
    timestamps:true
}
)

module.exports = mongoose.model('notes', NoteScheme)