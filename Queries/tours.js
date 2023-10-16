const db = require('../db/dbConfig')

const getTours = async () => {
    try {
        const tours = await db.any('SELECT * FROM tour')
        return tours;
    } catch (e) {
        return e
    }
}

const getTour = async (id) => {
    try {
        const tour = await db.one("SELECT * FROM tour WHERE id=$1", id)
        return tour;
    } catch (e) {
        return e;
    }
}

const updateTour = async (id, tour) => {
    const { country, city, duration, theme, created_at, Current_Timestamp } = tour

    try {
        const updatedTour = await db.one("UPDATE tour SET country=$1, city=$2, duration=$3, theme=$4, created_at=$5, Current_Timestamp=$6 WHERE id=$7 RETURNING *", [country, city, duration, theme, created_at, Current_Timestamp, id])
        return updatedTour;
    } catch (e) {
        return e;
    }
}

const createTour = async (newTour) => {
    const { country, region, state, city, duration, difficulty, theme, tour_name, image_url, ordered_points_of_interest } = newTour;

    try {
        const tour = await db.one(
            "INSERT INTO tour (country, region, state, city, duration, difficulty, theme, tour_name, image_url, ordered_points_of_interest) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [country, region, state, city, duration, difficulty, theme, tour_name, image_url, ordered_points_of_interest]
        );

        return tour;
    } catch (e) {
        return e;
    }
};


const destroyTour = async (id) => {
    try {
        const deletedTour = await db.one("DELETE FROM tour WHERE id=$1 RETURNING *", id)
        return deletedTour;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getTours,
    getTour,
    updateTour,
    createTour,
    destroyTour
}