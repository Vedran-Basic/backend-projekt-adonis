'use strict'

const Database = use('Database')
const Route = use('Route')

Route.get('/', async ({ view }) => {
    return view.render('welcome')
  })


Route.get('/welcome', 'AnimeController.render')

Route.get('/posts', async () => {
  return await Database.table('anime').select('*')
})


Route.get('/contex', (ctxx) => {
  return Object.keys(ctxx)
})