const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    emailaddress: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] // Email validation
    },
    sendmessage: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model('contact', ContactSchema);

// Exporting the model for later use
module.exports = Contact;
