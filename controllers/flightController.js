let { models } = require('../models/Flight');
const { v4: uuidv4 } = require('uuid');

// get all flight
exports.getFlights = (req, res) => {
  try {
    res.status(200).send(models);
  } catch (err) {
    console.error(err);
  }
};

// post a flight
exports.addFlight = async (req, res) => {
  try {
    const air = await req.body;
    models.push({
      ...air,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      id: uuidv4(),
    });
    res.status(201).send(`${air.title} booked`);
  } catch (err) {
    res.status(422).json({ error: 'something went wrong, try again' });
    console.error(err.message);
  }
};

// get a flight detail
exports.getFlight = async (req, res) => {
  try {
    const { id } = req.params;
    const fetchFlight = await models.find((ticket) => ticket.id === id);

    if (!fetchFlight) return res.status(404).send('Flight not found');
    res.status(200).send(fetchFlight);
  } catch (err) {
    console.error(err.message);
  }
};

//update flight data
exports.updateFlight = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price } = req.body;
    const updateAll = await models.find((ticket) => ticket.id === id);

    if (updateAll)
      (updateAll.title = title),
        (updateAll.price = price),
        (updateAll.date = new Date().toLocaleDateString()),
        (updateAll.time = new Date().toLocaleTimeString());
    res.status(200).send(`${title} has been updated`);
  } catch (err) {
    console.error(err.message);
  }
};

// delete a flight data
exports.deleteFlight = async (req, res) => {
  try {
    const { id } = req.params;
    models = models.findByIdAndDelete(id);

    if (!models) return res.status(404).json({ message: 'flight does not exist' });
    return res.status(200).send(`flight ${id} deleted`);
  } catch (err) {
    console.error(err.message);
  }
};
