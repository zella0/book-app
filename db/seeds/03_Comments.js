
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('Comments').insert([
        {commenter_name: "fakeAnon123", content: "first seeded comment", book_id: 1},
        {commenter_name: "fakeAnon345", content: "second seeded comment", book_id: 2},
        {commenter_name: "fakeAnon67", content: "third seeded comment", book_id: 2},
        {commenter_name: "fakeAnon3498", content: "fourth seeded comment", book_id: 1},
        {commenter_name: "fakeAnon12", content: "fifth seeded comment", book_id: 3}
      ]);
    });
};
