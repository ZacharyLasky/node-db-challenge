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
  
  projects.forEach(project => {
    if (project.completed === "0") {
      project.completed = "true"
    }
    else if (project.completed === "1") {
      project.completed = "false"
    }
    return projects
  })
}

function postProject(project) {
  return db("projects")
    .insert(project)
}

function getTasks(id) {
  return db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "tasks.task_description",
      "tasks.task_notes",
      "projects.project_name",
      "projects.project_number",
    )
    .where({"tasks.project_id": id})
}

function postTask(task) {
  return db("tasks")
    .insert(task)
}

// function getShoppingList(recipe_id) {
//   return db("recipe_ingredients")
//     .join("ingredients", "recipe_ingredients.id", "ingredients.id")
//     .select("ingredients.ingredient_name", "recipe_ingredients.quantity")
//     .where({ "recipe_id": recipe_id })
// }

// function getInstructions(recipe_id) {
//   return db("steps")
//   .where({"recipe_id": recipe_id})
// }