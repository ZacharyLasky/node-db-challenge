const express = require("express")
const model = require('./db-model');
const router = express.Router()

// adding resources.
router.post("/resources", (req, res) => {

  model.postResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
      
    })
    .catch (error => {
      res.status(500).json(error)
    })
})

// retrieving a list of resources.
router.get("/resources", (req, res) => {
  model.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

// retrieving a list of projects.
router.get("/projects", (req, res) => {
  model.getProjects()
    .then(projects => {
      projects.forEach(project => {
        if (project.completed === 0) {
          project.completed = true;
        }
        else if (project.completed === 1) {
          project.completed = false;
        }
      })
      res.status(200).json(projects)
    })
    .catch(error => {
     res.status(500).json(error)
   })
})

// adding projects.
router.post("/projects", (req, res) => {
  model.postProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

// retrieving a list of tasks. 
router.get("/tasks", (req, res) => {
  model.getTasks()
    .then(tasks => {
      tasks.forEach(task => {
        if (task.completed === 0) {
          task.completed = true;
        }
        else if (task.completed === 1) {
          task.completed = false;
        }
      })
      res.status(200).json(tasks)
    })
    .catch(error => {
     res.status(500).json(error)
   })
})

// adding tasks.
router.post("/tasks", (req,res) => {
  model.postTask(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router