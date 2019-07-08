## REPO Name: burger at https://github.com/BrendaTH/burger

## Heroku Deployment: https://nameless-bayou-79424.herokuapp.com/

### Eat-DA-Burger -  burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern and uses Node and MySQL to query/route data in the app, and Handlebars to generate the HTML.



### OVERVIEW and OPERATION
**Home page** - From the home page the user can
* create new burgers
* see all uneaten burgers
* see all already eaten burgers
* 'devour' a burger - which moves the burger from the uneaten to the eaten column

### Technology
The technology/interesting features for this project includes the following:
* node.js 
* express
* express-handlebars
* mysql
* bootstrap
* heroku with jawsdb to deploy the database

### Eat-DA-Burger has the following directory structure:
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars


 
Find Eat-DA-Burger running at [https://nameless-bayou-79424.herokuapp.com/](https://nameless-bayou-79424.herokuapp.com/)