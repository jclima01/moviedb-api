const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
     name: { type: String},
     email: { type: String, required: true, unique: true},
     password: { type: String},
     watchlist: { type: Array, default: []}
},
{ timestamps: true}
)


module.exports = mongoose.model('User', UserSchema)