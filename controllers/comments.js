const knex = require("../db/knex.js");
function uniqId() {
  return 'anon#' + Math.random().toString(36).substr(2, 5);
};

module.exports = {
  create: (req, res)=>{
    knex('Comments')
    .join('Books', 'Books.id', 'Comments.book_id')
    .where('Books.id', req.params.id)
    .insert({
      book_id: req.params.id,
      commenter_name: req.body.commenter_name || uniqId(),
      content: req.body.comment
    })
    .then((result)=>{
      res.redirect(`/books/${req.params.id}/comment`);
    })
  },
  renderCreate: (req, res)=>{
    knex('Comments')
    .rightJoin('Books', 'Books.id', 'book_id')
    .where('Books.id', req.params.id)
    .orderBy('Comments', 'desc')
    .then((result)=>{
      res.render('comments', {
        content: result
      })
    })
  }
}
