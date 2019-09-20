'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfesorSchema extends Schema {
  up () {
    this.create('profesors', (table) => {
      table.increments()
      table.string('nombre').notNullable()
      table.string('apellido_materno').nullable()
      table.string('apellido_paterno').nullable()
      table.integer('edad').notNullable()
      table.string('correo').notNullable().unique()
      table.text('contraseña', "longtext").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profesors')
  }
}

module.exports = ProfesorSchema
