exports.seed = function(knex) {
  return knex("tasks").insert([
        
    {task_description: "start writing", task_notes: "use a number2 pencil", completed: false, project_id: 1},
    
    {task_description: "design windows", task_notes: "use square window design", completed: true, project_id: 2},
    
    {task_description: "build the API", task_notes: "be careful", completed: false, project_id: 3},
        
  ])
}
