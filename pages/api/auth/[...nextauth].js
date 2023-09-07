import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];
// Check if we are running on preview
if (process.env.VERCEL_ENV === "preview") {
  providers.push(
    // Create a credentials provider with dummy data, describing input fields:
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "previewTest",
        },
        password: { label: "Password", type: "password" },
      },
      // and adding a fake authorization with static username and password:
      async authorize(credentials) {
        if (
          credentials.username === "previewTest" &&
          credentials.password === "test1234!"
        ) {
          return {
            id: "1",
            name: "tester",
            email: "tester@github",
          };
        } else {
          return null;
        }
      },
    })
  );
} else {
  // If not on preview, we use the GithubProvider as before
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

export const authOptions = {
  providers,
};

export default NextAuth(authOptions);
