import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "mail@example.com"
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "****"
        }
      },
      authorize(credentials) {
        let user = null

        if(credentials.email === "angelia@example.com") {
          user = { id: "0", email: credentials.email }
        } else {
          throw new Error("user not found")
        }

        return user
      }
    })
  ],
  callbacks: {
    async authorized({ auth }) {
      return !!auth
    },
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      if(token.id && session.user) {
        session.user.id = token.id
      }
      return session
    },
  }
})