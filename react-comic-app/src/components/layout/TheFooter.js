import React from "react";
import "../../css/thefooter.css";

export default function TheFooter() {
  return (
    <footer>
      <div id="footer__logo">
        <strong style={{ fontSize: "45px" }}>
          <span class="color-react">R</span>
          <span class="color-dodgerblue">N</span>
        </strong>
      </div>
      <div id="footer__text">
        <strong>
          <span class="r">R</span>
          <span class="novel">Novel </span>
        </strong>
        là nền tảng mở dành cho các tác giả và độc giả đam mê truyện chữ, nơi thành viên có thể tự
        do xuất bản các tác phẩm của mình với nhiều chức năng liên tục được cải tiến sẽ mang lại
        trải nghiệm tốt nhất cho các tác giả sáng tác truyện lẫn người đọc truyện online.
      </div>
      <div id="footer__nav">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Điều khoản dịch vụ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Chính sách bảo mật
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Hướng dẫn sử dụng
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Về bản quyền
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
