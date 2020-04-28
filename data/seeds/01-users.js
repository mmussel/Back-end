exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Trainer1', password:'password', isTrainer:true},
        {id: 2, username: 'Trainer2',password:'password', isTrainer:true},
        {id: 3, username: 'Trainer3',password:'password', isTrainer:true},
        {id: 4, username: 'Client1',password:'password', isTrainer:false}
      ]);
    });
};