const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    userid:{ type: String , required: true},
    comment: { type: String , required: true},
    movieid: { type: String , required: true}
},
{ timestamps: true}
)


module.exports = mongoose.model('Review', ReviewSchema)