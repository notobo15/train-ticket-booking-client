import { RootState } from "@/redux/store";
import { formatDateToYMD } from "@/utils/formatDate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ISearchState {
  isOpenModalFilter: boolean;
  train: Train | null;
  trainReturn: Train | null;
  startStationInfo: StationInfo | null;
  endStationInfo: StationInfo | null;
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
  carts: Seat[];
  sortingOptions: SortingOption[];
  resultCount: number;
  carriage: Carriage | null | undefined;
  price: number;
  view: "outbound" | "return" | string;
  step: "outbound" | "return";
  currentCarriage: { carriageId: number; carriageNumber: string; carriageClassName: string } | null;
  currentSeat: Seat | null;
  seathold: Seat[];
  seatholdReturn: Seat[];
}
const initialState: ISearchState = {
  isOpenModalFilter: false,
  price: 0,
  currentSeats: [],
  date: formatDateToYMD(new Date()),
  returnDate: null,
  destination: "",
  train: null,
  trainReturn: null,
  origin: "",
  carriageId: 0,
  carts: [],
  trainId: 0,
  carriage: null,
  departureStationId: 0,
  arrivalStationId: 0,
  departureDate: "string",
  step: "outbound",
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
  startStationInfo: null,
  endStationInfo: null,
  view: "outbound",
  currentCarriage: null,
  currentSeat: null,
  seathold: [],
  seatholdReturn: [],
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
    setTrainReturn: (state, action: PayloadAction<Train | null>) => {
      state.trainReturn = action.payload;
    },
    setStartStationInfo: (state, action: PayloadAction<StationInfo>) => {
      state.startStationInfo = action.payload;
    },
    setEndStationInfo: (state, action: PayloadAction<StationInfo>) => {
      state.endStationInfo = action.payload;
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
    setView: (state, action: PayloadAction<string>) => {
      state.view = action.payload;
    },
    setStep: (state, action: PayloadAction<any>) => {
      state.step = action.payload;
    },
    setCurrentCarriage: (
      state,
      action: PayloadAction<{
        carriageId: number;
        carriageNumber: string;
        carriageClassName: string;
        carriageClassId: number;
      } | null>
    ) => {
      state.currentCarriage = action.payload;
    },

    addToCart: (state, action) => {
      const seat = action.payload; // seat là đối tượng ghế
      state.carts.push(seat);
    },
    // Xóa ghế khỏi giỏ hàng
    removeFromCart: (state, action) => {
      const seatId = action.payload; // seatId là id của ghế cần xóa
      state.carts = state.carts.filter((seat) => seat.seatId !== seatId);
    },
    // Xóa tất cả ghế khỏi giỏ hàng
    clearCart: (state) => {
      state.carts = [];
    },
    setCurrentSeat: (state, action: PayloadAction<Seat | null>) => {
      state.currentSeat = action.payload;
    },
    setCurrentSeats: (state, action: PayloadAction<Seat[]>) => {
      state.currentSeats = action.payload;
    },
    addSeatHold: (state, action) => {
      state.seathold.push(action.payload);
    },
    addAllSeatHold: (state, action) => {
      state.seathold = action.payload;
    },
    removeSeatHold: (state, action: PayloadAction<number>) => {
      const seatId = action.payload;
      // state.seathold = state.seathold.filter((seat) => seat.seat.seatId !== seatId);
      state.seathold = state.seathold.filter((seat) => seat.seatId !== seatId);
    },
    clearSeatHold: (state, action: PayloadAction<void>) => {
      state.seathold = [];
    },
    addSeatHoldReturn: (state, action) => {
      state.seatholdReturn.push(action.payload);
    },
    addAllSeatHoldReturn: (state, action) => {
      state.seatholdReturn = action.payload;
    },
    removeSeatHoldReturn: (state, action: PayloadAction<number>) => {
      const seatId = action.payload;
      // state.seathold = state.seathold.filter((seat) => seat.seat.seatId !== seatId);
      state.seatholdReturn = state.seathold.filter((seat) => seat.seatId !== seatId);
    },
    clearSeatHoldReturn: (state, action: PayloadAction<void>) => {
      state.seatholdReturn = [];
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
  setCarriage,
  setPrice,
  setTrain,
  setTrainReturn,
  setEndStationInfo,
  setStartStationInfo,
  setView,
  setCurrentCarriage,
  addToCart,
  clearCart,
  removeFromCart,
  setCurrentSeat,
  setCurrentSeats,
  addSeatHold,
  removeSeatHold,
  setStep,
  addSeatHoldReturn,
  removeSeatHoldReturn,
  clearSeatHold,
  clearSeatHoldReturn,
  addAllSeatHold,
  addAllSeatHoldReturn,
} = counterSlice.actions;

export default counterSlice.reducer;
export const selectSearchState = (state: RootState) => state.search;
