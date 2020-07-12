const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
  findAssignerTasks,
};

function find(query) {

  let rows = db('assigners')
  return rows;
}

function findById(id) {
  return db('assigners')
    .where({ id })
    .first();
}

async function add(assigner) {
  const [id] = await db('assigners').insert(assigner);

  return findById(id);
}

function remove(id) {
  return db('assigners')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('assigners')
    .where({ id })
    .update(changes, '*');
}

function findAssignerTasks(assignerId) {
  return db('tasks as t')
    .join('assigners as a', 't.assigner_id', 'a.id')
    .select('t.id', 't.taskname', 't.description', 'a.id as assignerId', 'a.username as assigner')
    .where({ assigner_id: assignerId });
}