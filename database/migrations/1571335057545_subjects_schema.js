'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectsSchema extends Schema {
  up () {
    this.create('subjects', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('grade').notNullable()
      table.boolean('deleted').defaultTo(0)      
      table.timestamps()
    })
  }

  down () {
    this.drop('subjects')
  }
}

module.exports = SubjectsSchema
