import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
export default class AuthMiddleware {
  async handle({ auth, response }: HttpContext, next: NextFn) {
    try {
      await auth.use('api').authenticate()
      return next()
    } catch (error) {
      console.error('Authentication error:', error.message)
      return response.unauthorized({ message: 'Invalid or expired token' })
    }
  }
}
