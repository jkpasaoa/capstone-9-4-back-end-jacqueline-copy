const express = require('express');
const pointsOfInterest = express.Router({ mergeParams: true })
const { getPointsOfInterest, getPointOfInterest, updatePointOfInterest, createPointOfInterest, destroyPointOfInterest } = require('../Queries/pointOfInterest')

pointsOfInterest.get('/', async (req, res) => {
  const { tourId } = req.params;
  const allPointOfInterest = await getPointsOfInterest(tourId);
  allPointOfInterest ? res.status(200).json(allPointOfInterest) : res.status(500).json({ error: 'server error' })
});

pointsOfInterest.get('/:id', async (req, res) => {
  const { id } = req.params
  const pointOfInterest = await getPointOfInterest(id);
  if (pointOfInterest) {
    res.status(200).json(pointOfInterest);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

pointsOfInterest.put('/:id', async (req, res) => {
  const { id } = req.params
  const { pointOfInterest } = req.body;
  try {
    const updatedPointOfInterest = await updatePointOfInterest(id, pointOfInterest);
    res.status(200).json(updatedPointOfInterest);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

pointsOfInterest.post('/', async (req, res) => {
  const newPointOfInterest = req.body;
  try {
    const addedPointOfInterest = await createPointOfInterest(newPointOfInterest);
    res.status(200).json(addedPointOfInterest);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

pointsOfInterest.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedPointOfInterest = await destroyPointOfInterest(id);
    res.status(200).json(deletedPointOfInterest);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = pointsOfInterest;