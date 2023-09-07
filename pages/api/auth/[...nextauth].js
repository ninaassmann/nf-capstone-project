import NextAuth from "next-auth";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const fakeLogin = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: { label: "Username", type: "text", placeholder: "tester" },
    password: { label: "Password", type: "password" },
  },
  // and adding a fake authorization with static username and password:
  async authorize(credentials) {
    if (
      credentials.username === "tester" &&
      credentials.password === "tester1234!"
    ) {
      return {
        id: "1",
        name: "Tester",
        email: "tester@github",
      };
    } else {
      return null;
    }
  },
});

const providers =
  process.env.VERCEL_ENV === "preview"
    ? [fakeLogin]
    : [
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
      ];

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers,
};
export default NextAuth(authOptions);
