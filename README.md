# Hàu 3D — Atlas giải phẫu số

Website tương tác tập trung vào giải phẫu **hàu cửa sông _Crassostrea belcheri_**. Giao diện ba vùng được thiết kế như một phòng tiêu bản số: thư viện cấu trúc ở bên trái, mô hình/ảnh tiêu bản ở trung tâm và hồ sơ giải phẫu chi tiết ở bên phải.

## Tính năng

- Mô hình WebGL 360° với mở vỏ, tách lớp, hotspot và mô phỏng dòng nước lọc.
- 10 cấu trúc: vỏ, màng áo, mang, xúc biện môi, miệng, khối tạng, tuyến sinh dục, cơ khép, tim và ruột sau.
- Tìm kiếm, lọc theo hệ, ẩn/hiện từng lớp và định vị cơ quan.
- Bốn chế độ: **3D chân thực nhúng từ V2Fun**, **Giải phẫu lớp WebGL**, **Tiêu bản thật**, **Wireframe**.
- Chế độ V2Fun có trạng thái tải, toàn màn hình, mở cửa sổ riêng và nút chuyển sang mô hình nội bộ khi dịch vụ ngoài không khả dụng.
- Giao diện xanh đại dương, responsive, font sans-serif và tiếng Việt UTF-8.
- Ảnh tiêu bản được tối ưu WebP để tải nhanh trên GitHub Pages.

## Chạy cục bộ

Không cần bước build. Chạy một HTTP server tại thư mục dự án:

```bash
python -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Công nghệ

- HTML5, CSS3, JavaScript ES modules
- Three.js + OrbitControls qua CDN
- GitHub Actions/GitHub Pages

## Lưu ý khoa học

Mô hình là sơ đồ giáo dục định hướng, không phải bản quét giải phẫu định lượng. Hình dạng và tỷ lệ mô mềm thay đổi theo kích thước cá thể, mùa sinh sản, độ mặn và điều kiện môi trường. Ảnh tiêu bản trong repository do người dùng cung cấp cho dự án.

## Giấy phép

Mã nguồn: MIT — xem [LICENSE](LICENSE).
