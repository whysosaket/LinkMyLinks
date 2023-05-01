const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    otp: {type: String, required: true},
    email: {type: String, required: true},
    date: {type: Date, default: Date.now},
}, {timestamps: true});

otpSchema.index({createdAt: 1},{expireAfterSeconds: 300});

module.exports = mongoose.model('otp', otpSchema);