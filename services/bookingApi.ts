import { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Định nghĩa các interface cho request và response
interface Passenger {
  fullName: string;
  passengerTypeId: number;
  identityCardNumber: string;
}

interface Ticket {
  seatId: number;
  price: number;
  passenger: Passenger;
  departure?: boolean;
  seatReturnId?: number;
  seatReturnPrice?: number;
  trainId: number;
}

export interface BookingRequest {
  // bookingTime: string;
  startStationId?: number;
  endStationId?: number;
  startStationCode: string;
  endStationCode: string;
  tickets: Ticket[];
  departureDate: string;
  arrivalDate: string;
  userId?: string;
}

interface BookingResponse {
  bookingId: number;
  bookingTime: string;
  startStationId: number;
  endStationId: number;
  tickets: Ticket[];
  status: string;
}
export interface BookingResult {
  id: number;
  bookingId: number;
  bookingTime: string; // ISO String
  totalPrice: number;
  startStation: string;
  endStation: string;
  departureDate: string; // ISO Date
  status: string;
  arrivalDate: string;
  tickets: {
    ticketId: number;
    price: number;
    bookingDate: string; // ISO Date
    status: string;
    seatId: number | null;
    seatNumber: string;
    seatType: string | null;
    carriageName: string;
    trainName: string;
    departureDate: string;
    passenger: {
      fullName: string;
      identityCardNumber: string;
      passengerType: string;
      passengerId: number;
    };
    departure: boolean;
  }[];
}

// Tạo API cho booking
export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token; // Lấy token từ auth slice
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // Mutation để đặt vé

    createBooking: builder.mutation<IResponse<null>, BookingRequest>({
      query: (bookingData) => ({
        url: "/api/v1/Booking/Create", // Địa chỉ endpoint để tạo booking
        method: "POST",
        body: bookingData,
      }),
    }),
    // Query để lấy thông tin về một booking (nếu cần)
    getBookingById: builder.query<APIResponse<BookingResult>, number>({
      query: (bookingId) => `/bookings/${bookingId}`, // Địa chỉ lấy thông tin booking theo ID
    }),
    getBooking: builder.query<IResponse<BookingResult[]>, string>({
      query: (userId) => `/api/v1/Booking/GetBookingsByUserId/${userId}`,
    }),
  }),
});

export const { useCreateBookingMutation, useGetBookingByIdQuery, useGetBookingQuery } = bookingApi;
