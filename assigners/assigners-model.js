const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove,
  update,
  findAssignerTasks,
  findIdFromName
};

function find(query) {

  let rows = db('assigners')
  return rows;
}

function findBy(filter) {
  return db("assigners").where(filter);
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

async function findIdFromName(id) {
  console.log(id)
  const assignerId = await db('assigners').where("id", id).select('id').first();
  console.log('id in assignersmodel', assignerId)
  if (assignerId) {
      const { id } = assignerId;
      return id;
  } else {
      return false;
  }
}

// async function findIdFromName(username) {
//   const userId = await db('users').where("username", username).select('id').first();
//   console.log('id in usermodel', userId)
//   if (userId) {
//       const { id } = userId;
//       return id;
//   } else {
//       return false;
//   }
// }