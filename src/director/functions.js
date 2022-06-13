const Director = require("./table");


exports.addDirector = async (directorObj) => {
    try {
        const newDirector = await Director.create(directorObj);
        console.log(`Successfully added ${newDirector.dataValues.fullName} to the database`);
    } catch (error) {
        console.log(error)
    }
};

exports.listDirector = async (directorObj) => {
    try {
        // List all movies on the database
        const listDirector = await Director.findAll(directorObj.fullName);
        for (let i = 0; i < listDirector.length; i++) {
            console.log(listDirector[i].dataValues.fullName)
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateDirector = async (updateObj, filterObj) => {
    try {
        // Updates a movie in the database and updates it using two objects. First Object is replaced by the second.
        const response = await Director.update(updateObj, {where: filterObj});
        
        if (response[0] > 0) {
            console.log("Updated successfully");
        } else {
            console.log("Something went wrong");
        };
    } catch (error) {
        console.log(error);
    }
};

exports.deleteDirector = async (filterObj) => {
    try {
        // find and delete using a filter
        const response = await Director.destroy({where: filterObj});
        if (response > 0) {
            console.log("Successfully deleted");
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error);
    }
};