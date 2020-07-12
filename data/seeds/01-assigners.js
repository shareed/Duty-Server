
exports.seed = function(knex) {
  return knex('assigners').truncate()
    .then(function () {
      return knex('assigners').insert([
        {id: 1, username: 'user1', email: 'user1@email.com', password: 'user1', phonenumber: 111111111},
        {id: 2, username: 'user2', email: 'user2@email.com', password: 'user2', phonenumber: 222333444},
        {id: 3, username: 'user3', email: 'user3@email.com', password: 'user3', phonenumber: 112343214},
        {id: 4, username: 'user4', email: 'user4@email.com', password: 'user4', phonenumber: 427777777},
        {id: 5, username: 'user5', email: 'user5@email.com', password: 'user5', phonenumber: 8203659564},
        {id: 6, username: 'user6', email: 'user6@email.com', password: 'user6', phonenumber: 8734934283}
      ]);
    });
};

