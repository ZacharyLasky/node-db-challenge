
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      
      table.increments();
      
      table.text("project_name", 128)
        .unique()
        .notNullable();

      table.text("project_description", 128)
        
      table.text("completed", false)

    })
    
    .createTable("tasks", table => {

      table.increments()

      table.text("task_description")
        .unique()
        .notNullable()

      table.text("task_notes")
      
      table.text("completed", false)

      table.integer("project_id")
        .references('id')
        .inTable('projects')

    })

    .createTable("resources", table => {

      table.increments()

      table.text("resource_name")
        .unique()
        .notNullable()

      table.text("resource_description")

    })

    .createTable("project_resources", table => {

      table.increments()

      table.integer("quantity")
        .notNullable()

      table.integer("project_id")
        .references("id")
        .inTable("projects")

      table.integer("resource_id")
        .references("id")
        .inTable("resources")

    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
