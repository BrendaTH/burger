var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render("index", {burgers: data});
  });
});

// Post route -> back to home
router.post("/api/burgers", function(req, res) {
  // Test it.
  // console.log('You sent, ' + req.body.wish);

  // Test it.
  // res.send('You sent, ' + req.body.wish)
  console.log(req.body.burger_name);
  burger.create(req.body.burger_name, function(data) {
    console.log(data);
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req,res){
  burger.update(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

// Export routes for server.js to use.
module.exports = router;
