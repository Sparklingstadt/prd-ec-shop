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
          user = { email: credentials.email }
        } else {
          throw new Error("user not found")
        }

        return user
      }
    })
  ]
})