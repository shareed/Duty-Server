const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  findTasks,
  findTaskBy,
  findByTaskId,
  addTask,
  removeTask,
  updateTask,
  // findAssignerTasks,
};

function findTasks(query) {

  let rows = db('tasks')
  return rows;
}

function findTaskBy(filter) {
  return db("tasks").where(filter);
}

function findByTaskId(id) {
  return db('tasks')
    .where({ id })
    .first();
}

async function addTask(task) {
  const [id] = await db('tasks').insert(task, 'id');
  return findByTaskId(id)
};


function removeTask(id) {
  return db('tasks')
    .where({ id })
    .del();
}

function updateTask(id, changes) {
  return db('tasks')
    .where({ id })
    .update(changes, '*');
}

// function findAssignerTasks(assignerId) {
//   return db('tasks as t')
//     .join('assigners as a', 't.assigner_id', 'a.id')
//     .select('t.id', 't.taskname', 't.description', 'a.id as assignerId', 'a.username as assigner')
//     .where({ assigner_id: assignerId });
// }