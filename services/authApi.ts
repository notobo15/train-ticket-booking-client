import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  code: number;
  result: {
    token: string;
    authenticated: boolean;
  };
}
export interface Response<T> {
  code: number;
  message: string;
  result: T;
}

export interface SignUpParams {
  username: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_AUTH_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginParams>({
      query: (credentials) => ({
        url: "auth/token",
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: builder.mutation<Response<null>, SignUpParams>({
      query: (userData) => ({
        url: "auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "auth/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: "auth/reset-password",
        method: "POST",
        body: { token, newPassword },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useForgotPasswordMutation, useResetPasswordMutation } = authApi;
