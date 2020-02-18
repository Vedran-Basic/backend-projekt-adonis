'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Anime = use('App/Models/Anime')
/**
 * Resourceful controller for interacting with anime
 */
class AnimeController {
  render ({ request, view }) {
    const guessedNumber = Number(request.input('number'))
    const randomNumber = Math.floor(Math.random() * 20) + 1

    /** rendering view */
    return view.render('welcome', { guessedNumber, randomNumber })
  }

  async index ({ request, response, view }) {
    
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
}

  async destroy ({ params, request, response }) {
  }
}

module.exports = AnimeController


await use('Database').table('anime').insert({ name: 'Boku no hero academia', 'date Aired':2008, status:'Completed', summary:'very nice anime :thumbsup:' })
