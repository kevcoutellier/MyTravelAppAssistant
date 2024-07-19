/* eslint-disable @typescript-eslint/no-shadow */
import { defineConfig } from '@adonisjs/auth'
import { tokensGuard, tokensUserProvider } from '@adonisjs/auth/access_tokens'
import type { InferAuthEvents, Authenticators } from '@adonisjs/auth/types'

// Define the authentication configuration
const authConfig = defineConfig({
  // Set the default authentication guard to 'api'
  default: 'api',
  // Define the guards for the application
  guards: {
    api: tokensGuard({
      // Configure the user provider for the 'api' guard
      provider: tokensUserProvider({
        // Table name where tokens are stored
        tokens: 'accessTokens',
        // Dynamic import of the User model
        model: () => import('../app/models/user.js'),
      }),
    }),
  },
})

export default authConfig

// Type inference for authentication events and authenticators

// Extend the Authenticators interface to include inferred types from the auth configuration
declare module '@adonisjs/auth/types' {
  interface Authenticators extends InferAuthenticators<typeof authConfig> {}
}

// Extend the EventsList interface to include inferred authentication events
declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<Authenticators> {}
}
