// *********************************************************************************
// books-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Get all of the books
  app.get("/api/books", function(req, res) {   // Missing:  insert prices
    db.Book.findAll({}).then(function (dbBook) {
      console.log('In .get /api/books - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });
    
  /* 
  [
    {
        "id": 1,
        "title": "Gilead",
        "subtitle": "",
        "authors": "Marilynne Robinson",
        "categories": "Fiction",
        "thumbnail": "http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "description": "A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It‚Äôs 1956 in Gilead, Iowa, towards the end of the Reverend Ames‚Äôs life, and he is absorbed in recording his family‚Äôs story, a legacy for the young son he will never see grow up. Haunted by his grandfather‚Äôs presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend‚Äôs lost son who",
        "published_year": 2004,
        "average_rating": "4",
        "num_pages": 247,
        "ratings_count": 361,
        "price": null,
        "createdAt": "2020-07-19T18:13:29.000Z",
        "updatedAt": "2020-07-19T18:13:29.000Z"
    },
  ]
  */

  // Get a single book by its id
  app.get("/api/books/:id", function(req, res) {
    db.Book.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Author]
    }).then(function (dbBook) {
      console.log('In .get /api/books - findOne()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

  /* 
  {
    "id": 12,
    "title": "Warhost of Vastmark",
    "subtitle": "",
    "authors": "Janny Wurts",
    "categories": "Fiction",
    "thumbnail": "http://books.google.com/books/content?id=uOL0fpS9WZkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "description": "Tricked once more by his wily half-brother, Lysaer, Lord of Light, arrives at the tiny harbor town of Merior to find that Arithon's ship yards have been abandoned and meticulously destroyed, and that the Master of Shadow has disappeared as if into thin air. Meanwhile Arithon and the Mad Prophet Dakar are traveling on foot through the treacherous Kelhorn Mountains towards the Vastmark clans, there to raise further support for his cause. But raising a warhost is a costly business. Is it mere coincidence that Princess Talith‚ÄîLysaer's beautiful, headstrong wife‚Äîis taken captive and held for a vast ransom by a master brigand? The forces of light and shadow circle and feint, drawing ever closer to a huge conflict. And in the background the F",
    "published_year": 1995,
    "average_rating": "4",
    "num_pages": 522,
    "ratings_count": 2966,
    "price": null,
    "createdAt": "2020-07-19T18:13:29.000Z",
    "updatedAt": "2020-07-19T18:13:29.000Z"
}
  */

  // Get all the books within a category by its category name
  app.get("/api/books/category/:category", function(req, res) {
    db.Book.findAll({
      where: {
        categories: req.params.category
      },
      // include: [db.Author]
    }).then(function (dbBook) {
      console.log('In .get /api/books/:category - findAll()');
      console.log('req.params.category: ', req.params.category);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

  /* 
  [
    {
        "id": 13,
        "title": "Witness for the Prosecution & Selected Plays",
        "subtitle": "",
        "authors": "Agatha Christie",
        "categories": "English drama",
        "thumbnail": "http://books.google.com/books/content?id=_9u7AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "description": "Newly-Jacketed Edition Designed To Celebrate The 50Th Anniversary Of Christie S Faultlessly Plotted Witness For The Prosecution And Other Outstanding Plays. The Perfect Complement To The Latest Edition Of The Mousetrap And Selected Plays (50Th Aniversary Edition). Headlining This Book Is Witness For The Prosecution Christie S Highly Successful Stage Play Which Won The New York Drama Critics Circle Award For Best Foreign Play. A Stunning Courtroom Drama, It Tells The Story Of A Scheming Wife Testifying Against Her Husband In A Shocking Murder Trial. The Wild Beauty Of A Seaside House Perched High On The Devonshire River Tern Provides A Stunning Back-Drop In Towards Zero As A Psychopathic Murderer Homes In On The Unsuspecting Victims. Passio",
        "published_year": 1995,
        "average_rating": "4",
        "num_pages": 352,
        "ratings_count": 3908,
        "price": null,
        "createdAt": "2020-07-19T18:13:29.000Z",
        "updatedAt": "2020-07-19T18:13:29.000Z"
    }
  ]
  */
  
  // POST route for saving a new book
  app.post("/api/books", function(req, res) {
    db.Book.create(req.body).then(function (dbBook) {
      console.log('In .POST /api/books - create()');
      console.log('req.body: ', req.body);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

  
  // DELETE route for deleting posts
  app.delete("/api/books/:id", function(req, res) {
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBook) {
      console.log('In .DELETE /api/books - destroy()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });


  // PUT route for updating posts
  app.put("/api/books", function(req, res) {
    db.Book.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbBook) {
      console.log('In .PUT /api/books - update()');
      console.log('req.body.id: ', req.body.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

};
