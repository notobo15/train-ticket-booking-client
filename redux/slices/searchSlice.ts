import { RootState } from "@/redux/store";
import { formatDateToYMD } from "@/utils/formatDate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ISearchState {
  isOpenModalFilter: boolean;
  train: Train | null;
  date: string | null;
  returnDate: string | null;
  destination: string;
  trainId: number;
  departureStationId: number;
  arrivalStationId: number;
  departureDate: string;
  origin: string;
  carriageId: number;
  passagers: IPassager[];
  carriageType: number;
  seats: number[];
  currentSeats: Seat[];
  seatId: number;
  filters: {
    nighttime: boolean;
    early: boolean;
    midday: boolean;
    late: boolean;
  };
  sortingOptions: SortingOption[];
  resultCount: number;
  carriage: Carriage | null | undefined;
  price: number;
}

const initialState: ISearchState = {
  isOpenModalFilter: false,
  price: 0,
  currentSeats: [],
  date: formatDateToYMD(new Date()),
  returnDate: null,
  destination: "",
  train: null,
  origin: "",
  carriageId: 0,
  trainId: 0,
  carriage: null,
  departureStationId: 0,
  arrivalStationId: 0,
  departureDate: "string",
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
  carriageType: 0,
  seats: [],
  seatId: 0,
  filters: {
    nighttime: false,
    early: false,
    midday: false,
    late: false,
  },
  sortingOptions: [
    { label: "Recommended", isSelected: true },
    { label: "Cheapest", isSelected: false },
    { label: "Highest", isSelected: false },
    { label: "Fastest", isSelected: false },
    { label: "Earliest", isSelected: false },
    { label: "Latest", isSelected: false },
  ],
  resultCount: 0,
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
    setCarriageType: (state, action: PayloadAction<number>) => {
      state.carriageType = action.payload;
    },
    setSeatId: (state, action: PayloadAction<number>) => {
      state.seatId = action.payload;
    },
    clearSeat: (state) => {
      state.seats = [];
    },

    setFilters(state, action: PayloadAction<ISearchState["filters"]>) {
      state.filters = action.payload;
    },

    updateFilter(state, action: PayloadAction<{ key: string; value: boolean }>) {
      const { key, value } = action.payload;
      if (key in state.filters) {
        state.filters[key as keyof ISearchState["filters"]] = value;
      }
    },
    /* Sorting */
    setSortingOption(state, action: PayloadAction<string>) {
      state.sortingOptions = state.sortingOptions.map((option) =>
        option.label === action.payload ? { ...option, isSelected: true } : { ...option, isSelected: false }
      );
    },
    setResultCount(state, action: PayloadAction<number>) {
      state.resultCount = action.payload;
    },
    setIsOpenModalFilter(state, action: PayloadAction<boolean>) {
      state.isOpenModalFilter = action.payload;
    },
    setTrainId(state, action: PayloadAction<number>) {
      state.trainId = action.payload;
    },
    setArrivalStationId(state, action: PayloadAction<number>) {
      state.arrivalStationId = action.payload;
    },
    setDepartureStationId(state, action: PayloadAction<number>) {
      state.departureStationId = action.payload;
    },
    setDepartureDate(state, action: PayloadAction<string>) {
      state.departureDate = action.payload;
    },
    addSeat: (state, action: PayloadAction<Seat>) => {
      state.currentSeats.push(action.payload);
    },
    setTrain: (state, action: PayloadAction<Train | null>) => {
      state.train = action.payload;
    },
    // Xóa ghế theo seatId
    removeSeatById: (state, action: PayloadAction<number>) => {
      state.currentSeats = state.currentSeats.filter((seat) => seat.seatId !== action.payload);
    },

    // Cập nhật trạng thái của một ghế
    updateSeatStatus: (state, action: PayloadAction<{ seatId: number; status: any }>) => {
      const seat = state.currentSeats.find((seat) => seat.seatId === action.payload.seatId);
      if (seat) {
        seat.status = action.payload.status;
      }
    },
    setCarriage: (state, action: PayloadAction<Carriage | null | undefined>) => {
      state.carriage = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
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
  setSeatId,
  clearSeat,
  setFilters,
  updateFilter,
  setSortingOption,
  setResultCount,
  setIsOpenModalFilter,
  setArrivalStationId,
  setDepartureDate,
  setDepartureStationId,
  setTrainId,
  addSeat,
  removeSeatById,
  updateSeatStatus,
  setTrain,
  setCarriage,
  setPrice,
} = counterSlice.actions;

export default counterSlice.reducer;
export const selectSearchState = (state: RootState) => state.search;
