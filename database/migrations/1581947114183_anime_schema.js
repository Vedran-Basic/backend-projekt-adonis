'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimeSchema extends Schema {
  up () {
    this.create('anime', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('date Aired')
      table.string('status')
      table.text('summary')

      
    })
  }

  down () {
    this.drop('anime')
  }
}

module.exports = AnimeSchema
