const express = require('express');
const restrict = require('../auth/restricted-middleware.js')
const Assigners = require('./assigners-model.js');

const router = express.Router();

router.use(restrict);

router.get('/assigners', (req, res) => {
  Assigners.find(req.query)
  .then(assigners => {
    res.status(200).json({WELCOME:"YOU HAVE HIT THE ASSIGNERS ENDPOINT", assigners});
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error retrieving the assigners',
    });
  });
});

router.get('/assigner/:id', (req, res) => {
  Assigners.findById(req.params.id)
  .then(assigner => {
    if (assigner) {
      res.status(200).json(assigner);
    } else {
      res.status(404).json({ message: 'Assigner not found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error retrieving the assigner',
    });
  });
});

router.get('/assigner/:id/tasks', (req, res) => {
  Assigners.findAssignerTasks(req.params.id)
  .then(tasks => {
    if (tasks.length > 0) {
      res.status(200).json(tasks);
    } else {
      res.status(404).json({ message: 'No tasks for this assigner' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error retrieving the task for this assigner',
    });
  });
});

router.post('/assigner', (req, res) => {
  Assigners.add(req.body)

  .then(assigner => {
    res.status(201).json(assigner);
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error adding the assigner',
    });
  });
});

router.delete('/assigner/:id', (req, res) => {
  Assigners.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The assigner has been nuked' });
    } else {
      res.status(404).json({ message: 'The assigner could not be found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error removing the assigner',
    });
  });
});

router.put('/assigner/:id', (req, res) => {
  const changes = req.body;
  Assigners.update(req.params.id, changes)
  .then(assigner => {
    if (assigner) {
      res.status(200).json(assigner);
    } else {
      res.status(404).json({ message: 'The assigner could not be found' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: 'Error updating the assigner',
    });
  });
});


module.exports = router;