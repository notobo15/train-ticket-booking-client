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
}

export interface BookingRequest {
  bookingTime: string;
  startStationId?: number;
  endStationId?: number;
  startStationCode: string;
  endStationCode: string;
  tickets: Ticket[];
  departureDate: string;
  arrivalDate: string;
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
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    // Mutation để đặt vé
    createBooking: builder.mutation<APIResponse<null>, BookingRequest>({
      query: (bookingData) => ({
        url: "/bookings", // Địa chỉ endpoint để tạo booking
        method: "POST",
        body: bookingData,
      }),
    }),
    // Query để lấy thông tin về một booking (nếu cần)
    getBookingById: builder.query<APIResponse<BookingResult>, number>({
      query: (bookingId) => `/bookings/${bookingId}`, // Địa chỉ lấy thông tin booking theo ID
    }),
    getBooking: builder.query<APIResponse<BookingResult[]>, void>({
      query: () => `/bookings`,
    }),
  }),
});

export const { useCreateBookingMutation, useGetBookingByIdQuery, useGetBookingQuery } = bookingApi;
