interface IForm {
  origin: string;
  destination: string;
  date: string;
  returnDate: string;
  adults: number;
  children: number;
  students: number;
  seniors: number;
}

interface IPassager {
  value: number;
  id: number;
  title: string;
  description: string;
  seat?: string[];
}
interface Station {
  stationId: number;
  name: string;
  code: string;
  ggmapLink: string;
}

interface Province {
  provinceId: number;
  name: string;
  nameEn: string;
  fullName: string;
  fullNameEn: string;
  codeName: string;
  stations: Station[];
}

interface Route {
  id: number;
  distance: number;
  trainName: string | null;
  startStationName: string;
  endStationName: string;
  arrivalTime: string;
  departureTime: string;
  status: string | null;
  dateNumber: number;
}
interface Train {
  trainId: number;
  trainNumber: string;
  trainType: string;
  departureDate: string;
  arrivalDate: string | null;
  departureTime: string;
  arrivalTime: string | null;
  startProvinceName: string;
  endProvinceName: string;
  startStationName: string;
  endStationName: string;
  startStationCode: string;
  endStationCode: string;
  totalDistance: number;
  totalDuration: string;
  carriages: Carriage[];
  prices: Price[];
  routes: Route[];
}
interface Seat {
  seatId: number;
  seatNumber: string;
  seatType: string;
  floor: number;
  compartmentNumber: number;
  status: "available" | "booked" | "reserved";
  price?: number;
}

interface Carriage {
  carriageId: number;
  carriageNumber: string;
  carriageClassName: string;
  carriageClassId: number;
  seatCount: number;
  totalFloors: number;
  seats: Seat[] | null;
}
interface Price {
  seatTypeId: number;
  seatType: string;
  code: string;
  description: string;
  totalPrice: number;
}

interface APIResponse<T> {
  code: number;
  result: T;
  success: boolean;
  message: string;
}
interface Response<T> {
  data: T;
  success: boolean;
  errors: any;
}
interface IResponse<T> {
  data: T;
  success: boolean;
  errors: any;
}
interface StationInfo {
  code: string;
  name: string;
  province: string;
}
interface SeatHold {
  id: number;
  seat: Seat;
  train: Train;
  departureStation: Station;
  arrivalStation: Station;
  departureDate: string;
  holdStartTime: string;
  expirationTime: string;
  status: string;
  departure: boolean;
}
