// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(vals, cb) {
      console.log( ' in burger.js ' + vals)
      orm.insertOne(vals, function(res) {
        cb(res);
      });
    },
    update: function(val, cb) {
      orm.updateOne(val, function(res) {
        cb(res);
      });
    },
  };

  // Export the database functions for the controller (burgerController.js).
module.exports = burger;