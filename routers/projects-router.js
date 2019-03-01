const router = require('express').Router();
const knex = require('knex'); 

const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development) 


  
  // GET
  router.get('/', (req, res) => {
    db('projects')
    .then(project => {
      res.status(200).json(project)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  });

//   needed to post: name, description, completed
  router.post('/', (req, res) => {
    db('projects')
    .insert(req.body)
    .then(projectId=> {
      const [id] = projectId
      db('projects')
      .where({ id })
      .first()
      .then(project => {
        res.status(201).json(project)
      })
    })
    .catch(err => {
      res.status(500).json({err: 'Error adding new project!' })
    })
  })

  // GET for retrieving a project by its id

  //GET ID with STUDENTS
  router.get('/:id/actions', (req, res) => {
    const id = req.params.id
 
    db('actions')
    .where({ 'project_id': id })
    .then(action => {
       if (action.length > 0) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'The id cannot be found' });
      }
    }).catch(err => {
      res.status(500).json(err)
    })
  });




  module.exports = router;