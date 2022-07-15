import NextAuth from "next-auth"
import KeycloakProvider from 'next-auth/providers/keycloak'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: process.env.AUTH_CLIENT_ID!,
      clientSecret: process.env.AUTH_CLIENT_SECRET!,
      issuer: process.env.AUTH_ISSUER,
    })
  ],
})