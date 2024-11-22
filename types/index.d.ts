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
  stationName: string;
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
