const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/functions")
const { addTv, listTv, updateTv, deleteTv } = require("./tv/functions");
const { addDirector, listDirector, updateDirector, deleteDirector } = require("./director/functions");
const Movie = require("./movie/table");
const Director = require("./director/table");
const Tv = require("./Tv/table");

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        Movie.hasOne(Director, {
            foreignKey: "directorID"
        })
        Tv.hasOne(Director, {
            foreignKey: "directorID"
        })
        if (yargsObj.movie) {
            if (yargsObj.add) {
                // take movie key value pairs from yargsObj, send to add function and return
                await addMovie({title: yargsObj.title, actor: yargsObj.actor});

            } else if (yargsObj.list) {
                // list all films from database
                await listMovies(yargsObj);

            } else if (yargsObj.update) {
                // take a query (filter) and update key value pairs from yargsObj and then send them to update function
                await updateMovie({actor: yargsObj.actor}, {title: yargsObj.title});

            } else if (yargsObj.delete) {
                // take a filter key value pair from yargsObj and send to delete function, return a success or fail

                await deleteMovie({title: yargsObj.title});

            } else {
                console.log("Incorrect Command")
            }
    } else if (yargsObj.tv) {
            if (yargsObj.add) {
                // take tv key value pairs from yargsObj, send to add function
                await addTv({title: yargsObj.title, actor: yargsObj.actor});
            
            } else if (yargsObj.list) {
                // list all tv shows
                await listTv(yargsObj);

            } else if (yargsObj.update) {
                // update a record
                await updateTv({actor: yargsObj.actor}, {title: yargsObj.title});
    
            } else if (yargsObj.delete) {
                // delete a record
                await deleteTv({title: yargsObj.title});
            } else {
                console.log("Incorrect Command")
            }
    } else if (yargsObj.director) {
            if (yargsObj.add) {
                // take tv key value pairs from yargsObj, send to add function
                await addDirector({fullName: yargsObj.fullName});
                
            } else if (yargsObj.list) {
                // list all tv shows
                await listDirector(yargsObj);

            } else if (yargsObj.update) {
                // update a record
                await updateDirector({fullName: yargsObj.fullName}, {fullName: yargsObj.fullName});

            } else if (yargsObj.delete) {
                // delete a record
                await deleteDirector({fullName: yargsObj.fullName});
            } else {
                console.log("Incorrect Command")
            }
        } else {
            console.log("Table not specified")
        }
    } catch (error) {
    console.log(error)
    }
};


app(yargs.argv);