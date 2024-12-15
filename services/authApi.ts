import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  code: number;
  success: boolean;
  errors:
    | {
        errorCode: number;
        fieldName: string;
        description: string;
      }[]
    | null;
  data: {
    id: string;
    userName: string;
    email: string;
    isVerified: boolean;
    roles: string[];
    jwToken: string;
  };
}
export interface Response<T> {
  success: number;
  errors:
    | {
        errorCode: number;
        fieldName: string;
        description: string;
      }[]
    | null;
  data: T;
}

export interface SignUpParams {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface ResetPasswordRequest {
  email: string;
  token: string;
  newPassword: string;
}
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginParams>({
      query: (credentials) => ({
        url: "/api/v1/Account/Authenticate",
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: builder.mutation<Response<string>, SignUpParams>({
      query: (userData) => ({
        url: "/api/v1/Account/Register",
        method: "POST",
        body: userData,
      }),
    }),
    forgotPassword: builder.mutation<Response<string>, { email: string }>({
      query: (body) => ({
        url: "/api/v1/Account/ForgotPassword",
        method: "POST",
        body: body,
      }),
    }),
    resetPassword: builder.mutation<Response<string>, ResetPasswordRequest>({
      query: (body) => ({
        url: "/api/v1/Account/ResetPassword",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useForgotPasswordMutation, useResetPasswordMutation } = authApi;
