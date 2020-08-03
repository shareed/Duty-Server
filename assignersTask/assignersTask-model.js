const db = require('../data/dbConfig.js');

module.exports = {
    findByTask,
    add,
    findByTask,
    check,
    remove,
    findById
}

function findByTask(username) {
    return db('tasks as v')
        .join('users_task as uv', 'uv.task_id', 'v.id')
        .join('users as u', 'uv.user_id', 'u.id')
        .select('v.title', 'v.id as task_id', 'v.location', 'v.dates', 'v.description', 'uv.notes')
        .where({ 'u.username': username })
}

function findByTaskId(vacId) {
    return db('tasks as v')
        .join('users_task as uv', 'uv.task_id', 'v.id')
        .join('users as u', 'uv.user_id', 'u.id')
        .select('u.username', 'v.id as task_id', 'v.title', 'v.location', 'v.dates', 'v.description', 'uv.notes')
        .where({ 'v.id': vacId })
}

function findById(id) {
    return db('assigner_tasks').where({ id })
}

async function add(assignerId, taskId) {
    const [id] = await db('assigner_tasks').insert({assigner_id: assignerId, task_id: taskId });
   console.log
    return findById(id);
  }
  

function remove(userId, vacId) {
    return db('users_task').where({ 'user_id': userId }).andWhere({ 'task_id': vacId }).del()
}

function check(userId, vacId) {
    return db('users_task').where('user_id', userId).andWhere('task_id', vacId)
        .then(link => {
            if (!link.length) {
                return false
            } else {
                return true
            }
        });
};