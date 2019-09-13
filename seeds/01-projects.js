exports.seed = function(knex) {
  return knex("projects").insert([
        
    {project_name: "write new book", project_description: "a book about goblins", completed: false},
    
    {project_name: "design new car", project_description: "a car with sunroof", completed: true},
    
    {project_name: "create new internet", project_description: "an internet with no ads", completed: false}
        
  ])
}
