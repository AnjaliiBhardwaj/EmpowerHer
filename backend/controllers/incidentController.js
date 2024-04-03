// controllers/incidentController.js

const Incident = require('../models/Incident');

exports.createIncident = async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    const newIncident = new Incident({ userId, title, description });
    await newIncident.save();
    res.status(201).json({ message: 'Incident created successfully' });
  } catch (error) {
    console.error('Error creating incident:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error) {
    console.error('Error fetching incidents:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};