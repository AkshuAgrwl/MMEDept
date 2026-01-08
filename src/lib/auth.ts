import NextAuth from "next-auth";
import { prisma } from "@/lib/prismarc";
import { PrismaAdapter } from "@auth/prisma-adapter";

import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // debug: process.env.ENVIRONMENT === "development",
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: { strategy: "jwt" },
});
