
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Books').del()
    .then(function () {
      // Inserts seed entries
      return knex('Books').insert([
        {title: "random book title 111", img_url: "http://via.placeholder.com/150x150", description: "111 sypnosis qwe asd zxc", author_id: 2},
        {title: "random book title 222", img_url: "http://via.placeholder.com/150x150", description: "222 sypnosis qwe asd zxc", author_id: 1},
        {title: "random book title 333", img_url: "http://via.placeholder.com/150x150", description: "333 sypnosis qwe asd zxc", author_id: 3},
        {title: "random book title 444", img_url: "http://via.placeholder.com/150x150", description: "444 sypnosis qwe asd zxc", author_id: 1},
        {title: "random book title 555", img_url: "http://via.placeholder.com/150x150", description: "555 sypnosis qwe asd zxc", author_id: 2},
        {title: "random book title 666", img_url: "http://via.placeholder.com/150x150", description: "666 sypnosis qwe asd zxc", author_id: 3},
        {title: "random book title 777", img_url: "http://via.placeholder.com/150x150", description: "777 sypnosis qwe asd zxc", author_id: 4},
        {title: "random book title 888", img_url: "http://via.placeholder.com/150x150", description: "888 sypnosis qwe asd zxc", author_id: 4},
        {title: "random book title 999", img_url: "http://via.placeholder.com/150x150", description: "999 sypnosis qwe asd zxc", author_id: 1},
        {title: "random book title 000", img_url: "http://via.placeholder.com/150x150", description: "000 sypnosis qwe asd zxc", author_id: 4}
      ]);
    });
};
