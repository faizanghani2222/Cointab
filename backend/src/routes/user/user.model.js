const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    gender: { type: String },
    email: { type: String },
    name: { type: Object},
    location: { type: Object},
    login: { type: Object},
    dob: { type: Object},
    registered: { type: Object},
    picture: { type: Object}
})

const User = mongoose.model('user', userSchema);

module.exports = User;