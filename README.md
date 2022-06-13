# m37Sequelize

# First choose a table to interact with
# node src/app.js --movie, --tv, --director
# note that in the Director table only one field can be interacted with, this is the fullName of the director.

# add a record;
# node src/app.js --movie --add --title "<movie_title>" --actor "<movie_actor>"
# director needs to added just as a fullName;
# node src/app.js --director --add --fullName "<director_name>"

# list all records from a table;
# node src/app.js --movie --list

# update a record from a table, the first is a search criteria the second is what is added to the record to update it;
# node src/app.js --movie --title "<movie_title>" --title "<movie_title>"

# delete a record from a table using search criteria;
# node src/app.js --movie --title "<movie_title>"
