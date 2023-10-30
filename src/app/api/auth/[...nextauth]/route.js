import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: "cec027147726033d3301",
      clientSecret: "ffdc1dc8ef45f4fa1d5f83c8a189e65bae9c9e90",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "12345aaa",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
