const knex = require("../db/knex.js");

module.exports = {
  getAll: (req, res) => {
    knex('Books')
    .then((result)=>{
      res.render('books', {
        books: result
      })
    })
  },
  renderCreate: (req, res) => {
    knex('Authors')
    .then((result)=>{
      res.render('new_book', {
        authors: result
      })
    })
  },
  create: (req, res) => {
    knex('Books')
    .join('Authors', 'Authors.id', 'Books.author_id')
    .insert({
      title: req.body.title,
      img_url: req.body.img_url,
      description: req.body.description,
      author_id: req.body.authors
    })
    .then((result)=>{
      res.redirect('/books')
    })
  }
}
