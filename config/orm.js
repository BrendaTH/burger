// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(cb) {
      var queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(val, cb) {
      var queryString = "INSERT INTO burgers SET ?";
      //(burger_name, devoured) VALUES ('" + val + "', false)";

      //var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + val + "', false)";
      connection.query(queryString, {burger_name: val, devoured: false}, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    updateOne: function(val, cb) {
      var queryString = "UPDATE burgers SET ? WHERE ?";
      connection.query(queryString, [{devoured: true },{id: val}], function(err, result) {
        if (err) {
          throw err;
        }
        console.log("update one result is: ");
        console.log(result);
        cb(result);
      });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
