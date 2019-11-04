'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LessonsSchema extends Schema {
  up () {
    this.create('lessons', (table) => {
      table.increments()
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.string('grade').notNullable()
      table.string('group').notNullable()
      table.boolean('deleted').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('lessons')
  }
}

module.exports = LessonsSchema
