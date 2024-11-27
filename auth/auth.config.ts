import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import axios from "axios";
const authConfig: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
      authorization: {
        params: {
          prompt: "select_account", // Đây là yêu cầu Google cho One Tap
          include_granted_scopes: "true",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID ?? "",
      clientSecret: process.env.FACEBOOK_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Gọi API login từ Spring Boot
          const response = await axios.post("http://localhost:8080/api/auth/signin", {
            username: credentials?.username,
            password: credentials?.password,
          });

          if (response.data.accessToken) {
            // Trả về thông tin người dùng cùng với accessToken nếu login thành công
            return {
              id: response.data.id,
              username: response.data.username,
              email: response.data.email,
              roles: response.data.roles,
              accessToken: response.data.accessToken, // Lưu token vào session
            };
          } else {
            return null; // Trả về null nếu không có accessToken
          }
        } catch (error) {
          console.error("Login failed:", error);
          return null; // Trả về null nếu có lỗi xảy ra
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Sử dụng JWT để lưu session
  },
  callbacks: {
    // Callback sau khi JWT được tạo ra
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken; // Lưu accessToken vào JWT token
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.roles = user.roles;
      }
      return token;
    },
    // Callback khi session được truy cập
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string; // Truyền accessToken vào session
        session.id = token.id as number;
        session.username = token.username as string;
        session.email = token.email as string;
        session.roles = token.roles as string[];
      }
      return session;
    },
  },
  pages: {
    signIn: "/en/sign-in", //sigin page
  },
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     return "/en/home";
  //   },
  // },
};

export default authConfig;
