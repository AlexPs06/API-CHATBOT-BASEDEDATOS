'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnoSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.string('nombre', 80).notNullable()
      table.string('apellido_materno').nullable()
      table.string('apellido_paterno').nullable()
      table.integer('edad').notNullable()
      table.string('correo', 80).notNullable().unique()
      table.text('contraseña', "longtext").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnoSchema
