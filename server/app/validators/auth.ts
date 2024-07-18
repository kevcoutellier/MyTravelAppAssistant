import vine from '@vinejs/vine'

// nouveau validator
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(3).maxLength(32),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(3).maxLength(64),
    last_name: vine.string().minLength(3).maxLength(64),
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const user = await db.from('User').where('email', value).first()
        return !user
      }),
    password: vine.string().minLength(3).maxLength(512),
  })
)
