const db = require('../data/dbConfig.js');

module.exports = {
    // findByTaskId,
    addTask,
    // findByTaskName,
    // check,
    // remove,
    findById
}


function findById(id) {
    return db('assigner_tasks').where({ id })
}

async function addTask(assignerId, taskId) {
    console.log(assignerId, taskId)
    const [id] = await db('assigner_tasks').insert({assigner_id: assignerId, task_id: taskId });

  
    return findById(id);
  }
  
