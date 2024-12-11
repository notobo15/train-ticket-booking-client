import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CheckoutRequest {
  amount: number;
  orderInfo: string;
}

interface CheckoutResponse {
  success: boolean;
  message: string;
  url: string;
  status: boolean;
}

// Tạo service với RTK Query
export const orderApi = createApi({
  reducerPath: "orderApi", // Tên cho slice của API
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL, // URL của server API
  }),
  endpoints: (builder) => ({
    // Mutation để gửi yêu cầu checkout
    checkout: builder.mutation<CheckoutResponse, CheckoutRequest>({
      query: (checkoutData) => ({
        url: "/order/checkout", // Endpoint của API
        method: "POST", // Phương thức POST
        body: checkoutData, // Gửi dữ liệu vào body của POST request
      }),
    }),
  }),
});

// Export các hook để sử dụng trong component
export const { useCheckoutMutation } = orderApi;
