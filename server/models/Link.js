const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {type: Date, default: Date.now},
    linkaddress: { type: String},
    title: { type: String},
    list: {type: String, default: 'Default'},
    public: {type: Boolean, default: false}
});

module.exports = mongoose.model('link', linkSchema);