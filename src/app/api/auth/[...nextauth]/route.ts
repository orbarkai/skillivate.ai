import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider && account.providerAccountId) {
        token.sub =
          token.sub ?? `${account.provider}:${account.providerAccountId}`;
      }
      if (profile && typeof profile === "object") {
        if ("name" in profile) {
          const name = (profile as Record<string, unknown>).name;
          if (typeof name === "string") token.name = name;
        }
        if ("picture" in profile) {
          const picture = (profile as Record<string, unknown>).picture;
          if (typeof picture === "string") token.picture = picture;
        }
      }
      return token;
    },
  },
  events: {
    async signIn({ user, account }) {
      if (!account?.provider || !account.providerAccountId) return;
      const id = `${account.provider}:${account.providerAccountId}`;
      await prisma.user.upsert({
        where: { id },
        update: {
          name: user.name ?? undefined,
          email: user.email ?? undefined,
          image: user.image ?? undefined,
        },
        create: {
          id,
          name: user.name ?? null,
          email: user.email ?? null,
          image: user.image ?? null,
        },
      });
    },
  },
});

export { handler as GET, handler as POST };
