import NextAuth from "next-auth";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "tester" },
      password: { label: "Password", type: "password" },
    },
    // and adding a fake authorization with static username and password:
    authorize(credentials) {
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
  }),
  // ...add more providers here
];

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers,
};
export default NextAuth(authOptions);
