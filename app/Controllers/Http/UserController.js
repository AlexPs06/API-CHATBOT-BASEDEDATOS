'use strict'
const User = use('App/Models/User')

class UserController {
    async index ({response}) {
        let users = await User.all()

        return response.json(users)
    }
    async show ({params, response}) {
        const user = await User.find(params.id)
        return response.json(user)
    }

    async login ({request,auth, response}) {
        const userData = request.only(['email', 'password'])
        const user = await User.findBy('email', userData.email)
        if (user==null) {
            return response.status(404).json({
                status: 404,
                message: "Usuario invalido"
            })  
        }
        try {
            let authAttempt = await auth.attempt(userData.email, userData.password)
            return response.status(200).json({
                logued: true,
                status: 200,
                user: user,
                token: authAttempt.token
            })
        } catch (error) {
            console.log(error);
            return response.status(404).json({
                status: 404,
                message: "error en la contraseña o el nombre de usuario"
            })        
        }
    }
    async store ({request, response}) {
        const userInfo = request.only(['username','email', 'password', 'age', 'type'])

        const user = new User()
        user.username = userInfo.username
        user.email = userInfo.email
        user.password = userInfo.password
        user.age = userInfo.age
        user.type = userInfo.type

        await user.save()

        return response.status(201).json(user)
      }
    async update ({params, request, response}) {
        const userInfo = request.only(['username','email', 'password', 'age', 'type'])


        const user = await User.find(params.id)
        if (!user) {
        return response.status(404).json({data: 'Resource not found'})
        }
        user.username = userInfo.username
        user.email = userInfo.email
        user.password = userInfo.password
        user.age = userInfo.age
        user.type = userInfo.type


        await user.save()

        return response.status(200).json(user)
    }
    async delete ({params, response}) {
        const user = await User.find(params.id)
        if (!user) {
        return response.status(404).json({data: 'Resource not found'})
        }
        await user.delete()

        return response.status(204).json(null)
    }
}

module.exports = UserController
