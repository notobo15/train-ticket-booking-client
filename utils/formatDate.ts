export const formatDateToYMD = (date: Date | null): string => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
export const convertTo12HourFormat = (time: string): string => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, seconds);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export function formatCurrencyVND(amount: number): string {
  return amount.toLocaleString("vi-VN") + "đ";
}
export function getPriceRange(prices: Price[]): string {
  if (prices.length === 0) return "No prices available";

  const minPrice = Math.min(...prices.map((price) => price.totalPrice));
  const maxPrice = Math.max(...prices.map((price) => price.totalPrice));

  if (minPrice === maxPrice) {
    return formatCurrencyVND(minPrice);
  } else {
    return `${formatCurrencyVND(minPrice)} - ${formatCurrencyVND(maxPrice)}`;
  }
}
export function formatPriceK(amount: number): string {
  if (amount < 1000) return `${amount}`;
  return `${Math.floor(amount / 1000)}K`;
}
export const parseDuration = (duration: string): number => {
  const [hours, minutes] = duration.split(":").map(Number);
  return hours * 60 + minutes;
};
export function formatDateToDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear(); // Lấy năm

  return `${day}-${month}-${year}`;
}
