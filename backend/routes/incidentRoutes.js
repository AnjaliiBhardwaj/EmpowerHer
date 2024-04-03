// routes/incidentRoutes.js

const express = require('express');
const router = express.Router();
const incidentController = require('../controllers/incidentController');

router.post('/', incidentController.createIncident);
router.get('/', incidentController.getAllIncidents);
// Add other incident routes as needed

module.exports = router;

