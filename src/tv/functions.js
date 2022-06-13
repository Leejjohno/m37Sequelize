const Tv = require("./table")

exports.addTv = async (tvObj) => {
    try {
        const newTv = await Tv.create(tvObj);
        console.log(`Successfully added ${newTv.dataValues.title} to the database`);
    } catch (error) {
        console.log(error)
    }
};

exports.listTv = async (tvObj) => {
    try {
        // List all movies on the database
        const listTvs = await Tv.findAll(tvObj);
        for (let i = 0; i < listTvs.length; i++) {
            console.log(listTvs[i].dataValues.title, listTvs[i].dataValues.actor)
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateTv = async (updateObj, filterObj) => {
    try {
        // Updates a movie in the database and updates it using two objects. First Object is replaced by the second.
        const response = await Tv.update(updateObj, {where: filterObj});
        
        if (response[0] > 0) {
            console.log("Updated successfully");
        } else {
            console.log("Something went wrong");
        };
    } catch (error) {
        console.log(error);
    }
};

exports.deleteTv = async (filterObj) => {
    try {
        // find and delete using a filter
        const response = await Tv.destroy({where: filterObj});
        if (response > 0) {
            console.log("Successfully deleted");
        } else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error);
    }
};