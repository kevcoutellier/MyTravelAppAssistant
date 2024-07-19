import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateAuthAccessTokensTable extends BaseSchema {
  protected tableName = 'auth_access_tokens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('token', 255).notNullable().unique()
      table.string('type', 80).notNullable()
      table.timestamp('expires_at').nullable()
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
