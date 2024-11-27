// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    username: string;
    email: string;
    roles: string[];
    accessToken: string;
  }

  interface Session {
    user: User;
    accessToken: string;
    id: number;
    username: string;
    email: string;
    roles: string[];
  }
}
