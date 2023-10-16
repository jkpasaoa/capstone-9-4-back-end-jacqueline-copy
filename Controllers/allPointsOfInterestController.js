const express = require('express');
const allPointsOfInterest = express.Router();
const {
  getAllPointsOfInterest,
  getPointOfInterest,
  updatePointOfInterest,
  createPointOfInterest,
  deletePointOfInterest,
} = require('../Queries/allPointsOfInterest');

// GET all points of interest
allPointsOfInterest.get('/', async (req, res) => {
  const allPoints = await getAllPointsOfInterest();
  allPoints ? res.status(200).json(allPoints) : res.status(500).json({ error: 'server error' });
});

// GET a specific point of interest by ID
allPointsOfInterest.get('/:id', async (req, res) => {
  const { id } = req.params;
  const pointOfInterest = await getPointOfInterest(id);
  if (pointOfInterest) {
    res.status(200).json(pointOfInterest);
  } else {
    res.status(404).json({ error: 'not found' });
  }
});

// PUT (Update) a specific point of interest by ID
allPointsOfInterest.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body; // Data to update the point of interest
  try {
    const updatedPointOfInterest = await updatePointOfInterest(id, updatedData);
    res.status(200).json(updatedPointOfInterest);
  } catch (error) {
    res.status(404).json({ error: 'not found' });
  }
});

// POST (Create) a new point of interest
allPointsOfInterest.post('/', async (req, res) => {
  const newData = req.body; // Data to create the new point of interest
  try {
    const createdPointOfInterest = await createPointOfInterest(newData);
    res.status(201).json(createdPointOfInterest);
  } catch (error) {
    res.status(500).json({ error: 'server error' });
  }
});

// DELETE a specific point of interest by ID
allPointsOfInterest.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPointOfInterest = await deletePointOfInterest(id);
    res.status(200).json(deletedPointOfInterest);
  } catch (error) {
    res.status(404).json({ error: 'not found' });
  }
});

module.exports = allPointsOfInterest;
