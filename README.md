# Atlas giải phẫu 3D hàu *Crassostrea belcheri*

Trang học liệu mở mô phỏng hình thái, giải phẫu và sinh học của hàu cửa sông *Crassostrea belcheri* — tên được WoRMS chấp nhận hiện nay là *Magallana belcheri*.

## Trải nghiệm trực tuyến

**GitHub Pages:** https://webgis-vinhlong.github.io/hau3D/

## Chức năng

- Mô hình Three.js xoay 360°, thu phóng và chọn cơ quan trực tiếp.
- Điều chỉnh độ mở vỏ theo thời gian thực.
- Chế độ tách lớp giải phẫu.
- Mô phỏng dòng hạt đi qua hệ thống lọc.
- Chú giải 10 cấu trúc giải phẫu.
- Đặc điểm hình thái và số liệu mẫu tại Bình Đại, Bến Tre.
- Chu kỳ sống, sinh cảnh và vùng độ mặn.
- Giao diện responsive cho máy tính và điện thoại.

## Chạy cục bộ

Trang là HTML/CSS/JavaScript tĩnh, không cần biên dịch. Chạy lệnh:

    python -m http.server 8080

Sau đó mở http://localhost:8080.

Mô hình tải Three.js từ jsDelivr nên cần kết nối Internet trong lần chạy.

## Cấu trúc

    .
    ├── index.html
    ├── assets/
    │   ├── app.js
    │   └── styles.css
    ├── .github/workflows/pages.yml
    ├── .nojekyll
    ├── LICENSE
    └── README.md

## Nguồn khoa học

- [World Register of Marine Species — *Magallana belcheri*](https://www.marinespecies.org/aphia.php?p=taxdetails&id=836035)
- [FAO — Basic bivalve biology](https://www.fao.org/4/y5720e/y5720e07.htm)
- [FAO — Oyster culture in Thailand](https://www.fao.org/4/ab717e/ab717e07.htm)
- Tạp chí Khoa học Trường Đại học Cần Thơ, Tập 54, Số 1B (2018), trang 92–100.

## Giới hạn

Mô hình 3D là mô hình giáo dục tổng hợp. Màu, kích thước và vị trí tương đối của cơ quan đã được đơn giản hóa để dễ quan sát; không dùng để chẩn đoán bệnh hoặc định danh loài độc lập.

## Giấy phép

MIT — xem [LICENSE](LICENSE).

