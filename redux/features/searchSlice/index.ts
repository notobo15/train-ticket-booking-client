import { RootState } from "@/redux/store";
import { formatDateToYMD } from "@/utils/formatDate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface IState {
  // adults: number;
  // children: number;
  // students: number;
  // seniors: number;
  date: string | null;
  returnDate: string | null;
  destination: string;
  origin: string;
  carriageId: number;
  passagers: IPassager[];
  carriageType: string;
  seats: number[];
}

const initialState: IState = {
  // adults: 1,
  // children: 0,
  // students: 0,
  // seniors: 0,
  date: formatDateToYMD(new Date()),
  returnDate: null,
  destination: "",
  origin: "",
  carriageId: 0,
  passagers: [
    {
      id: 1,
      value: 1,
      title: "Adults",
      description: "19-59 years",
    },
    {
      id: 2,
      value: 0,
      title: "Children",
      description: "0-6 years",
    },
    {
      id: 3,
      value: 0,
      title: "Students",
      description: "7-18 years",
    },
    {
      id: 4,
      value: 0,
      title: "Seniors",
      description: "60+ years",
    },
  ],
  carriageType: "",
  seats: [],
};

export const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setAdults: (state, action: PayloadAction<number>) => {
      state.passagers[0].value = action.payload;
    },
    setChildren: (state, action: PayloadAction<number>) => {
      state.passagers[1].value = action.payload;
    },
    setStudents: (state, action: PayloadAction<number>) => {
      state.passagers[2].value = action.payload;
    },
    setSeniors: (state, action: PayloadAction<number>) => {
      state.passagers[3].value = action.payload;
    },
    setDate: (state, action: PayloadAction<string | null>) => {
      state.date = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<string | null>) => {
      state.returnDate = action.payload;
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setOrigin: (state, action: PayloadAction<string>) => {
      state.origin = action.payload;
    },
    setCarriageId: (state, action: PayloadAction<number>) => {
      state.carriageId = action.payload;
    },
    setPassegers: (state, action: PayloadAction<IPassager[]>) => {
      state.passagers = action.payload;
    },
    setCarriageType: (state, action: PayloadAction<string>) => {
      state.carriageType = action.payload;
    },
    addSeat: (state, action: PayloadAction<number>) => {
      const seatId = action.payload;
      if (state.seats.includes(seatId)) {
        state.seats = state.seats.filter((id) => id !== seatId);
      } else {
        state.seats = [...state.seats, seatId];
      }
    },
    clearSeat: (state) => {
      state.seats = [];
    },
  },
});

export const {
  setAdults,
  setChildren,
  setDate,
  setDestination,
  setOrigin,
  setReturnDate,
  setSeniors,
  setStudents,
  setCarriageId,
  setPassegers,
  setCarriageType,
  addSeat,
  clearSeat,
} = counterSlice.actions;

export default counterSlice.reducer;
export const selectSearchState = (state: RootState) => state.search;
