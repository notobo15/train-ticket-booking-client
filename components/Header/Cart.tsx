import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart({
  label,
  icon,
  count = 0,
  cartItems = [],
}: {
  label?: string;
  icon?: React.ReactNode;
  count?: number;
  cartItems: Array<{
    id: number;
    ticketCode: string;
    trainName: string;
    carriage: string;
    seat: string;
    direction: string;
    date: string;
    time: string;
    seatType: string;
  }>;
}) {
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(300); // Đếm ngược 300 giây (5 phút)

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (showModal && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(countdown);
  }, [showModal, timer]);

  const handleMouseLeave = () => {
    setShowModal(false);
    setTimer(300);
  };

  return (
    <div
      className="focus-visible:outline-none focus-visible:ring inline-flex items-center justify-center max-w-full ps-100 pe-100 py-100 rounded-sm hover:-translate-y-006 active:translate-y-006 hover:backdrop-blur-lg bg-color-static-transparent hover:bg-color-film-secondary active:bg-color-film-tertiary text-color-primary hover:text-color-primary active:text-color-primary relative cursor-pointer"
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={handleMouseLeave}
    >
      {label && <span className="ps-050 pe-050 py-000 font-weight-bold leading-100 text-size-87">{label}</span>}

      <div className="relative">
        {icon}
        {count > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>

      {showModal && (
        <div className="absolute top-[80%] mt-2 right-0 w-auto p-4 bg-white shadow-lg rounded-lg border border-gray-300 z-10">
          <h3 className="mb-2 fs-6 whitespace-nowrap">Thông tin đặt vé</h3>
          {cartItems.length > 0 ? (
            <>
              <table className="min-w-full text-left text-sm text-gray-700">
                <thead>
                  <tr>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Seat ID</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Train</th>
                    <th className="w-auto px-2 py-1 font-semibold border-b whitespace-nowrap">Chiều</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Ngày</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Giờ</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Toa</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Ghế</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Loại ghế</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Còn lại</th>
                    <th className="px-2 py-1 font-semibold border-b whitespace-nowrap">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.ticketCode}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.trainName}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.direction}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.date}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.time}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.carriage}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.seat}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{item.seatType}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">{`${Math.floor(
                        timer / 60
                      )}:${String(timer % 60).padStart(2, "0")}`}</td>
                      <td className="px-2 py-1 border-b whitespace-nowrap">
                        <button className="text-red-500 hover:text-red-700">
                          <FaTrash size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="w-full py-2 mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
                <Link href="/checkout">Checkout</Link>
              </button>
            </>
          ) : (
            <Empty />
          )}
        </div>
      )}
    </div>
  );
}
function Empty() {
  return (
    <>
      <p className="text-center text-gray-500 whitespace-nowrap px-10 py-4">Empty Cart</p>
    </>
  );
}
