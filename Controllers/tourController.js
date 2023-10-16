const express = require('express');
const tours = express.Router()
const { getTours, getTour, updateTour, createTour, destroyTour } = require('../Queries/tours')
const pointsOfInterestController = require("./pointOfInterestController.js")

tours.use('/:tourId/pointsOfInterest', pointsOfInterestController)

tours.get('/', async (req, res) => {
  const allTours = await getTours();
  allTours ? res.status(200).json(allTours) : res.status(500).json({ error: 'server error' })
});

tours.get('/:id', async (req, res) => {
  const { id } = req.params
  const tour = await getTour(id);
  if (tour) {
    res.status(200).json(tour);
  } else {
    res.status(404).json({ error: "Can't find that tour." });
  }
});

tours.put('/:id', async (req, res) => {
  const { id } = req.params
  const { tour } = req.body;
  try {
    const updatedTour = await updateTour(id, tour);
    res.status(200).json(updatedTour);
  } catch (error) {
    res.status(404).json({ error: "Can't find that tour." });
  }
});

tours.post('/', async (req, res) => {
  const newTour = req.body;
  try {
    const addedTour = await createTour(newTour);
    res.status(200).json(addedTour);
  } catch (error) {
    res.status(404).json({ error: "Can't find that tour." });
  }
});

tours.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedTour = await destroyTour(id);
    res.status(200).json(deletedTour);
  } catch (error) {
    res.status(404).json({ error: "Can't find that tour." });
  }
});

module.exports = tours;