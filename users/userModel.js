const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('users').select('id', 'username', 'password', 'isTrainer');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function update(id, changes) {
    return db('users')
      .where({ id })
      .update(changes);
  }
  
function remove(id) {
    return db('users')
      .where('id', id)
      .del();
  }