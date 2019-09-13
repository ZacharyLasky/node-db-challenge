const knex = require("knex")
const knexFile = require("./knexFile")
const knexConfig = knexFile.development

module.exports = knex(knexConfig)