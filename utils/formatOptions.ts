// formatOptions.ts

// Định nghĩa kiểu cho từng option và cấu trúc `options` cuối cùng
interface Option {
  label: string;
  value: string;
}

interface GroupedOption {
  label: string;
  options: Option[];
  provinceId: number;
}

/**
 * Chuyển đổi dữ liệu từ API thành cấu trúc options cho select component.
 * @param {Province[]} data - Dữ liệu từ API provinces/with-stations.
 * @returns {GroupedOption[]} options - Dữ liệu đã format để dùng cho select component.
 */
export const formatOptions = (data: Province[]): GroupedOption[] => {
  const groupedOptions: Record<string, GroupedOption> = {};

  data?.forEach((province) => {
    const region = province.name; // Sử dụng tên tỉnh làm nhãn cho từng miền

    if (!groupedOptions[region]) {
      groupedOptions[region] = {
        label: region,
        options: [],
        provinceId: province.provinceId,
      };
    }

    province.stations.forEach((station) => {
      groupedOptions[region].options.push({
        label: station.name,
        value: station.code,
      });
    });
  });

  // Chuyển đổi `groupedOptions` từ object sang mảng
  return Object.values(groupedOptions);
};
