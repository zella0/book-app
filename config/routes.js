const authors_controller = require('../controllers/authors.js');
const books_controller = require('../controllers/books.js');
const comments_controller = require('../controllers/comments.js');

module.exports = (app) => {
  // AUTHORS ROUTES / NEW AUTHOR PAGE
  // C
  app.get('/authors/create/', authors_controller.renderCreate);
  app.post('/authors/create/', authors_controller.create);

  // BOOKS ROUTES / NEW BOOK PAGE
  // C
  app.get('/books/create/', books_controller.renderCreate);
  app.post('/books/create/', books_controller.create);

  // R
  // MAIN PAGE
  app.get('/books/', books_controller.getAll);

  // SPECIFIC PAGE
  // COMMENTS ROUTES
  // R
  app.get('/books/:id/comment/', comments_controller.renderCreate);

  // C
  app.post('/books/:id/comment/', comments_controller.create);
}
