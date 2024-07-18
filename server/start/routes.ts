import router from '@adonisjs/core/services/router'
const AuthController = () => import('../app/controllers/auth_controller.js')

router
  .group(() => {
    router.post('/register', [AuthController, 'register'])
    router.post('/login', [AuthController, 'login'])
  })
  .prefix('api/user')
