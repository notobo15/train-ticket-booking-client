import React from "react";
import styles from "./policy.module.scss";
export default function Index() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Policy</h1>
      <p className={styles.date}>Last updated: November 1, 2024</p>
      <h3 className={styles.subHeading}>QUY ĐỊNH ĐỔI, TRẢ VÉ</h3>
      <div className={styles.content}>
        <p>
          <strong>
            1. Thời gian cao điểm Tết: Mức khấu trừ đối với vé trả lại, đổi vé là 30% giá tiền in trên Thẻ lên tàu hỏa
            (vé).
          </strong>
        </p>
        <p>- Từ ngày 21/01/2025 đến ngày 31/01/2025: đối với đoàn tàu số chẵn.</p>
        <p>- Từ ngày 01/02/2025 đến ngày 09/02/2025: đối với đoàn tàu số lẻ.</p>
        <p>
          - Từ ngày 23/01/2025 đến ngày 27/01/2025: đối với đoàn tàu số lẻ có ga đi là ga Hà Nội và có ga đến từ ga Phủ
          Lý đến ga Đồng Hới.
        </p>
        <p>
          - Từ ngày 31/01/2025 đến ngày 09/02/2025: đối với đoàn tàu số chẵn có ga đi từ ga Đồng Hới đến ga Phủ Lý và có
          ga đến là ga Hà Nội.
        </p>
        <p>(*) Thời gian đổi, trả vé</p>
        <p>- Hành khách đổi, trả vé cá nhân: chậm nhất trước giờ tàu chạy là 24 giờ.</p>
        <p>- Hành khách trả vé tập thể: chậm nhất trước giờ tàu chạy là 48 giờ.</p>
        <p>
          <strong>
            2. Ngoài thời gian quy định tại điểm (1.) nêu trên, mức khấu trừ phí, thời gian đổi, trả vé thực hiện như
            sau:
          </strong>
        </p>
        <p>
          - Đổi vé: Vé cá nhân đổi trước giờ tàu chạy 24 giờ trở lên, lệ phí là 20.000 đồng/vé; không áp dụng đổi vé đối
          với vé tập thể.
        </p>
        <p>- Trả vé:</p>
        <p>
          &nbsp; &nbsp;+ Vé cá nhân: Trả vé trước giờ tàu chạy từ 4 giờ đến dưới 24 giờ, lệ phí là 20% giá vé; từ 24 giờ
          trở lên lệ phí là 10% giá vé.
        </p>
        <p>
          &nbsp; &nbsp;+ Vé tập thể: Trả vé trước giờ tàu chạy từ 24 giờ đến dưới 72 giờ, lệ phí là 20% giá vé; từ 72
          giờ trở lên lệ phí là 10% giá vé.
        </p>
        <p>
          <strong>3. Hình thức trả vé.</strong>
        </p>
        <p>
          - Khi hành khách mua vé và thanh toán online qua website bán vé của Ngành Đường sắt, app bán vé hoặc các ứng
          dụng mua vé tàu hỏa của các đối tác thứ ba thì có thể trả vé online qua các website bán vé của Ngành Đường sắt
          hoặc đến trực tiếp nhà ga.
        </p>
        <p>
          - Khi hành khách mua vé bằng các hình thức khác, muốn đổi vé, trả vé hành khách đến trực tiếp nhà ga kèm theo
          giấy tờ tùy thân bản chính của người đi tàu (hoặc người mua vé) cho nhân viên đường sắt. Đồng thời, thông tin
          trên thẻ đi tàu phải trùng khớp với giấy tờ tùy thân của hành khách.
        </p>
        <i>Trân trọng cảm ơn!.</i>
      </div>
    </div>
  );
}
