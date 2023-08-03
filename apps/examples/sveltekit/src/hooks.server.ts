import { SvelteKitAuth } from "@auth/sveltekit"
import Auth0Provider from "@auth/core/providers/auth0"
import { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
    Auth0Provider(
      {
        clientId: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        issuer: 'https://authjs-sveltkit.eu.auth0.com/',
        wellKnown: 'https://authjs-sveltkit.eu.auth0.com/.well-known/openid-configuration'
      }
    )
  ],
})
