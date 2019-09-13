const db = require("./db-config")

module.exports = {
  getResources,
  postResource,
  getProjects,
  postProject,
  getTasks,
  postTask
}

function getResources() {
  return db("resources")
}

function postResource(resource) {
  return db("resources")
    .insert(resource)
}

function getProjects() {
  return db("projects")

}

function postProject(project) {
  return db("projects")
    .insert(project)
}

function getTasks() {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.id",
      "tasks.task_description",
      "tasks.task_notes",
      "projects.project_name",
      "projects.project_description"
    )
}

function postTask(task) {
  return db("tasks")
    .insert(task)
}