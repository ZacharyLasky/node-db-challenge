exports.seed = function(knex) {
  return knex("resources").insert([
        
    {resource_name: "pencil", resource_description: "number2"},
    
    {resource_name: "window", resource_description: "square"},
    
    {resource_name: "api framework", resource_description: "very cool"},
        
  ])
}

