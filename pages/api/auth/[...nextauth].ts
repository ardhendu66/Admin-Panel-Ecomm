import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import { envVariables } from '@/config/config'

const adminEmails = ["ppcan3006@gmail.com"]

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: envVariables.googleAuthId,
      clientSecret: envVariables.googleAuthSecret,
    })
  ],
  adapter: <Adapter>MongoDBAdapter(clientPromise),
  secret: envVariables.nextAutSecretKey,
})