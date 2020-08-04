const express = require('express');
const restrict = require('../auth/restricted-middleware.js')



const Assigners = require('../assigners/assigners-model.js');
const AssignerTasks = require('../assignersTask/assignersTask-model.js');
const Tasks = require('./tasks-model.js');

const router = express.Router();

router.use(restrict);

router.get('/alltasks', (req, res) => {
  Tasks.findTasks(req.query)
  .then(tasks => {
    res.status(200).json({WELCOME:"YOU HAVE HIT THE ASSIGNERS ENDPOINT", tasks});
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error retrieving the tasks',
    });
  });
});


router.get('/:id', (req, res) => {
  Tasks.findByTaskId(req.params.id)
  .then(tasks => {
    if (tasks) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ message: 'Assigner not found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error retrieving the task',
    });
  });
});

router.get('/:id/tasks', (req, res) => {
  Assigners.findAssignerTasks(req.params.id)
  .then(tasks => {
    if (tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ message: 'No tasks for this task' });
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({
      message: 'Error retrieving the task for this task',
    });
  });
});


router.post('/add/task', (req, res) => {
  console.log(req.body)
  console.log(req.session.assigner.id)
  const newTask = req.body;
  const username  = req.session.assigner.username;
  Tasks.addTask(newTask)
      .then(task => {
        console.log("New Task:", task);
          const taskId = task.id;
          console.log("New Task Id:", taskId);
          Assigners.findIdFromId(username).then(assignerId => {
            console.log("Assigner Id:", assignerId);
            // res.status(201).json(task)
            AssignerTasks.addTask(assignerId, taskId).then(assignerTaskId => {
              console.log("Assigner Task Id:", assignerTaskId);
                  res.status(201).json(task)
              })
                  .catch(err => {
                      console.log('err 1', err)
                      res.status(500).json(err);
                  })
          })
              .catch(err => {
                  console.log('err 2', err)
                  res.status(500).json(err);
              });

      })
      .catch(err => {
          console.log('err 3', err)
          res.status(500).json(err)
      });
});








router.delete('/:id', (req, res) => {
  Tasks.removeTask(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The task has been nuked' });
    } else {
      res.status(404).json({ message: 'The task could not be found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error removing the task',
    });
  });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  Tasks.updateTask(req.params.id, changes)
  .then(task => {
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'The task could not be found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error updating the task',
    });
  });
});


module.exports = router;