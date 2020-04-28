exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Testing1', password:'password', isTrainer:true},
        {id: 2, username: 'Testing2',password:'password', isTrainer:true},
        {id: 3, username: 'Testing3',password:'password', isTrainer:true},
        {id: 4, username: 'Client1',password:'password', isTrainer:false}
      ]);
    });
};