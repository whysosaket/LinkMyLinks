const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {type: Date, default: Date.now},
    link: { type: String},
    list: {type: String, default: 'Default'}
});

module.exports = mongoose.model('link', linkSchema);