import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

// Define the User model
export default class User extends compose(BaseModel, AuthFinder) {
  // Define the table name for the User model
  static table = 'users'

  // Primary key column
  @column({ isPrimary: true })
  declare id: number

  // Optional first name column
  @column()
  declare first_name: string | null

  // Optional last name column
  @column()
  declare last_name: string | null

  // Email column
  @column()
  declare email: string

  // Password column (not serialized)
  @column({ serializeAs: null })
  declare password: string

  // Created at column with automatic creation timestamp
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Updated at column with automatic creation and update timestamps
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  // Access token configuration for the User model
  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '1 day',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })
}
