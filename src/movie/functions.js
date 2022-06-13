const Movie = require("./table");


exports.addMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(`Successfully added ${newMovie.dataValues.title} to the database`);
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async (movieObj) => {
    try {
        // List all movies on the database
        const listMovies = await Movie.findAll(movieObj);
        for (let i = 0; i < listMovies.length; i++) {
            console.log(listMovies[i].dataValues.title, listMovies[i].dataValues.actor)
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (updateObj, filterObj) => {
    try {
        // Updates a movie in the database and updates it using two objects. First Object is replaced by the second.
        const response = await Movie.update(updateObj, {where: filterObj});
        
        if (response[0] > 0) {
            console.log("Updated successfully");
        } else {
            console.log("Something went wrong");
        };
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (filterObj) => {
    try {
        // find and delete using a filter
        const response = await Movie.destroy({where: filterObj});
        if (response > 0) {
            console.log("Successfully deleted");
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error);
    }
};

