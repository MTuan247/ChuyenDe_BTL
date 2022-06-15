import React from "react";
import { Col, Row, Button, Pagination } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "../../css/overview.css";

export default function Overview() {
  const novel = {
    info: {
      img: "https://i.imgur.com/F4YrlR5.jpg",
      name: "Nhất Thống Thiên Hạ",
      author: "Thiên tàm thổ đậu",
      description: `Quá khứ như một bàn tay vô hình bóp lấy cổ hắn, dìm hắn xuống nước, ép cho hắn không thở nổi. Nhưng hắn lại chỉ có thể mang theo thống khổ và tuyệt vọng mà sống, giống một kẻ mãi mãi lạc lối trong bóng đêm, không tìm thấy được ánh sáng.
        Rồi một ngày, nó xuất hiện. Như sợi dây cứu mạng hướng hắn vẫy gọi, nó không phải ánh sáng, nhưng nó có thể dẫn hắn đi tìm ánh sáng. Hắn nắm lấy, vận mệnh nghịch chuyển, mở ra một hành trình với vô hạn khả năng.
        Lời tác giả:
        Đây là truyện vô hạn lưu về kamen rider, tuy nhiên sẽ chỉ liên quan cực ít đến các kamen rider gốc nên dù độc giả biết hay không biết cũng đều có thể đón đọc.
        Những chương đầu có thể dính convert nhưng những chương sau mình đã cố sửa cho văn phong dễ hiểu hơn. Mong mọi người thông cảm.
        `,
      genres: ["Tu tiên", "Chuyển sinh", "Đô thị", "Cung đấu"],
    },

    states: {
      lastUpdate: "2022-12-12",
      complete: true,
      chapter: 234,
      view: 12947,
      like: 1221,
      rate: {
        ratePoints: 4.3,
        rateTimes: 1447,
      },
    },

    id: "00001",
  };

  const novelChapter = {
    novelID: "1",
    chapters: [
      { index: 1, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 2, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 3, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 4, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 5, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 6, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 7, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 8, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 9, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 10, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 11, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 12, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 13, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 14, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 15, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 16, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 17, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 18, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 19, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 20, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 21, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 22, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 23, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 24, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 25, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 26, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 27, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 28, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 29, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 30, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 31, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 32, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 33, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 34, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 35, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 36, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 37, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 38, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 39, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 40, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 41, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 42, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 43, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 44, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 45, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 46, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 47, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 48, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 49, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 50, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 51, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 52, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 53, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 54, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 55, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 56, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 57, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 58, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 59, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      { index: 60, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 61, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 62, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 63, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 64, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 65, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 66, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 67, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 68, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 69, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 70, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 71, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 72, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 73, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 74, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 75, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 76, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 77, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 78, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 79, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 80, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 81, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 82, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 83, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 84, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 85, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 86, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 87, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 88, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 89, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 90, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 91, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 92, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 93, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 94, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 95, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 96, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 97, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 98, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 99, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 100, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 101, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 102, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 103, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 104, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 105, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 106, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 107, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 108, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 109, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 110, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 111, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 112, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 113, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 114, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 115, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 116, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 117, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 118, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 119, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
      // { index: 120, name: "Ta là Tạc Thiên Bang Từ Khuyết", content: "" },
    ],
  };

  return (
    <div className="overview-group">
      <div className="overview-info">
        <div className="overview-left">
          <div className="info-img" style={{ background: `url(${novel.info.img})` }}></div>
          <div>
            <Button className="overview-btn" variant="outline-secondary">
              Đọc ngay
            </Button>
            <Button className="overview-btn" variant="outline-primary">
              Theo dõi
            </Button>
          </div>
          <div>
            <Button className="overview-btn" variant="outline-danger">
              Yêu thích
            </Button>
            <Button className="overview-btn" variant="outline-success">
              Đánh giá
            </Button>
          </div>
        </div>

        <div className="info-detail">
          <div className="info-detail__title">{novel.info.name}</div>
          <div className="info-detail__content">
            <ul>
              <li className="info-content">
                <div className="info-content__label">Tác giả:</div>
                <div className="info-content__detail">{novel.info.author}</div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Thể loại:</div>
                <div className="info-content__detail">
                  {novel.info.genres.map((genre) => (
                    <div className="info-genre" key={genre}>
                      <a href="/">{genre}</a>,
                    </div>
                  ))}
                  {novel.states.complete ? (
                    <div className="info-genre">
                      <a href="/">Đã hoàn thành</a>
                    </div>
                  ) : (
                    <div className="info-genre">
                      <a href="/">Chưa hoàn thành</a>
                    </div>
                  )}
                </div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Đánh giá:</div>
                <div className="info-content__detail">
                  <StarRatings
                    rating={novel.states.rate.ratePoints}
                    starRatedColor="gold"
                    numberOfStars={5}
                    starDimension="21px"
                    starSpacing="3px"
                    name="rating"
                  />
                </div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Lượt xem:</div>
                <div className="info-content__detail">{novel.states.view} lượt xem</div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Lượt thích:</div>
                <div className="info-content__detail">{novel.states.like} lượt thích</div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Giới thiệu:</div>

                <p className="info-content__des">{novel.info.description}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overview-chapters">
        <div className="overview-chapters__title">Danh sách chương</div>
        <Row>
          {novelChapter.chapters.map(({ index, name }) => (
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="3"
              className="line-1 overview-chapters__item"
              key={index}
            >
              <a href="#">
                Chapter {index}: {name}
              </a>
            </Col>
          ))}
        </Row>
      </div>
      <div className="overview-pagination">
        <Pagination className="pagination-md justify-content-center">
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item active>{6}</Pagination.Item>
          <Pagination.Item>{7}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
}
