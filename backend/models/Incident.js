// models/Incident.js

const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  // Add other incident properties here
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;