const db = require('../db/dbConfig');

const getAllPointsOfInterest = async () => {
  try {
    const pointsOfInterest = await db.any('SELECT * FROM point_of_interest');
    return pointsOfInterest;
  } catch (e) {
    return e;
  }
};

const getPointOfInterest = async (id) => {
  try {
    const pointOfInterest = await db.one('SELECT * FROM point_of_interest WHERE id=$1', id);
    return pointOfInterest;
  } catch (e) {
    return e;
  }
};

// Function to update a point of interest
const updatePointOfInterest = async (id, updatedData) => {
  try {
    const { /* Extract properties from updatedData */ } = updatedData;
    const updatedPointOfInterest = await db.one(
      'UPDATE point_of_interest SET /* Update columns here */ WHERE id = $1 RETURNING *',
      [id]
    );
    return updatedPointOfInterest;
  } catch (e) {
    return e;
  }
};

// Function to create a new point of interest
const createPointOfInterest = async (newData) => {
  try {
    const { /* Extract properties from newData */ } = newData;
    const createdPointOfInterest = await db.one(
      'INSERT INTO point_of_interest (/* Columns */) VALUES (/* Values */) RETURNING *'
    );
    return createdPointOfInterest;
  } catch (e) {
    return e;
  }
};

// Function to delete a point of interest
const deletePointOfInterest = async (id) => {
  try {
    const deletedPointOfInterest = await db.one('DELETE FROM point_of_interest WHERE id = $1 RETURNING *', [id]);
    return deletedPointOfInterest;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllPointsOfInterest,
  getPointOfInterest,
  updatePointOfInterest,
  createPointOfInterest,
  deletePointOfInterest,
};
