// models/Contact.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  // Add other contact properties here
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;