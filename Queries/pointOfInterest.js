const db = require('../db/dbConfig')

const getPointsOfInterest = async (tour_id) => {
    try {
        const pointsOfInterest = await db.any("SELECT * FROM point_of_interest WHERE tour_id=$1", [tour_id]);
        return pointsOfInterest;
    } catch (e) {
        return e
    }
}

const getPointOfInterest = async (id) => {
    try {
        const pointOfInterest = await db.one("SELECT * FROM point_of_interest WHERE id=$1", [id]);
        return pointOfInterest;
    } catch (e) {
        return e;
    }
}

const updatePointOfInterest = async (id, PointOfInterest) => {
    const { latitude, longitude, name, tour_id, image_url, created_at } = PointOfInterest;

    try {
        const updatedPointOfInterest = await db.one("UPDATE point_of_interest SET latitude=$1, longitude=$2, poi_name=$3, tour_id=$4, image_url=$5, created_at=$6 WHERE id=$7 RETURNING *", [latitude, longitude, name, tour_id, image_url, created_at, id]);
        return updatedPointOfInterest;
    } catch (e) {
        return e;
    }
}

const createPointOfInterest = async (newPointOfInterest) => {
    const { latitude, longitude, poi_name, tour_id, image_url, created_at } = newPointOfInterest;

    try {
        const pointOfInterest = await db.one("INSERT INTO point_of_interest (latitude, longitude, poi_name, tour_id, image_url, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [latitude, longitude, poi_name, tour_id, image_url, created_at]);
        return pointOfInterest;
    } catch (e) {
        return e;
    }
}

const destroyPointOfInterest = async (id) => {
    try {
        const deletedPointOfInterest = await db.one("DELETE FROM point_of_interest WHERE id=$1 RETURNING *", [id]);
        return deletedPointOfInterest;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getPointsOfInterest,
    getPointOfInterest,
    updatePointOfInterest,
    createPointOfInterest,
    destroyPointOfInterest
}