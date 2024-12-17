import { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CheckoutRequest {
  amount: number;
  orderId: string;
}

interface CheckoutResponse {
  success: boolean;
  message: string;
  url: string;
  status: boolean;
}

export const orderApi = createApi({
  reducerPath: "orderApi", // Tên cho slice của API
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL, // URL của server API
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token; // Lấy token từ auth slice
    //   // if (token) {
    //   headers.set("Authorization", `Bearer ${token}`);
    //   // }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    // Mutation để gửi yêu cầu checkout
    checkout: builder.mutation<CheckoutResponse, CheckoutRequest>({
      query: (checkoutData) => ({
        url: "/api/v1/VnPay/CreatePayment", // Endpoint của API
        method: "POST", // Phương thức POST
        body: checkoutData, // Gửi dữ liệu vào body của POST request
      }),
    }),
  }),
});

// Export các hook để sử dụng trong component
export const { useCheckoutMutation } = orderApi;
