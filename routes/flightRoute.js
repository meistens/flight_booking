const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

//GET
router.get('/flights', controller.getFlights);

//POST
router.post('/flights', controller.addFlight);

//GET
router.get('/flights/:id', controller.getFlight);

//PUT
router.put('/flights/:id', controller.updateFlight);

//DELETE
router.delete('/flights/:id', controller.deleteFlight);

module.exports = router;
