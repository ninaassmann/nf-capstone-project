import NextAuth from "next-auth";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const providers = [
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  // ...add more providers here
];

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers,
};
export default NextAuth(authOptions);
