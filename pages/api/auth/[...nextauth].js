import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  // ...add more providers here
];

export const authOptions = {
  providers,
};
export default NextAuth(authOptions);
