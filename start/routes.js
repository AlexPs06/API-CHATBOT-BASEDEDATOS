'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(() => {
  Route.post('users', 'UserController.store')
  Route.get('users', 'UserController.index')
  Route.get('users/:id', 'UserController.show')
  Route.put('users/:id', 'UserController.update')
  Route.delete('users/:id', 'UserController.delete')


  Route.post('login', 'UserController.login')




  Route.post('profesors', 'ProfesorController.store')
  Route.get('profesors', 'ProfesorController.index')
  Route.get('profesors/:id', 'ProfesorController.show')
  Route.put('profesors/:id', 'ProfesorController.update')
  Route.delete('profesors/:id', 'ProfesorController.delete')
  
  Route.post('alumnos', 'AlumnoController.store')
  Route.get('alumnos', 'AlumnoController.index')
  Route.get('alumnos/:id', 'AlumnoController.show')
  Route.put('alumnos/:id', 'AlumnoController.update')
  Route.delete('alumnos/:id', 'AlumnoController.delete')
}).prefix('api/v1')
