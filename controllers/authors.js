const knex = require("../db/knex.js");

module.exports = {
  renderCreate: (req, res)=>{
    res.render('authors')
  },
  create: (req, res)=>{
    knex('Authors')
    .insert({
      name: req.body.name,
      bio: req.body.bio
    })
    .then(()=>{
      res.redirect('/books/create/');
    })
  }
}
