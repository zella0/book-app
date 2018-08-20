
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('Authors').insert([
        {name: "Chelsa", bio: "teacher / mountain biking / webdev"},
        {name: "Lauren", bio: "I like to listen to my music really loud"},
        {name: "Elijah", bio: "From gangbanger to web developer"},
        {name: "Nhan", bio: "reading books in 2018 lul"}
      ]);
    });
};
