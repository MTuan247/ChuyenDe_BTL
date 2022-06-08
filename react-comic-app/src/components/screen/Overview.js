import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../css/overview.css";

export default function Overview() {
  const novel = {
    info: {
      img: "https://i.imgur.com/F4YrlR5.jpg",
      name: "Nhất Thống Thiên Hạ",
      author: "Thiên tàm thổ đậu",
      description:
        "Một ông trùm xã hội đen khi về làm vua thời cổ đại sẽ gặp những cảnh ngộ ra sao? Một đất nước loạn lạc khắp nơi có được bình định hay không? Một đế chế hùng mạnh sẽ được dựng nên như thế nào? Một hôn quân, một bạo chúa, hay một minh quân sẽ xuất thế?",
      genres: ["Tu tiên", "Chuyển sinh", "Đô thị", "Cung đấu"],
    },

    states: {
      lastUpdate: "2022-12-12",
      complete: true,
      chapter: 234,
      view: 12947,
      like: 1221,
      rate: {
        ratePoints: 4.5,
        rateTimes: 1447,
      },
    },

    id: "00001",
  };

  return (
    <div className="overview-group">
      <div className="overview-info">
        <Row>
          <Col xs="12" sm="5" md="3">
            <div
              className="overview-info__img"
              style={{ background: `url(${novel.info.img})` }}
            ></div>
          </Col>

          <Col xs="12" sm="7" md="9">
            <div className="overview-info__title">{novel.info.name}</div>
            <div className="overview-info__content">
              <ul>
                <li className="overview-content">
                  <div className="overview-content__label">Tác giả:</div>
                  {novel.info.author}
                </li>
                <li className="overview-content">
                  <div className="overview-content__label">Thể loại:</div>

                  {novel.info.genres.map((genre) => (
                    <div className="overview-genre">
                      <a href="/">{genre + ", "}</a>
                    </div>
                  ))}
                  {novel.states.complete ? (
                    <div className="overview-genre">
                      <a href="/">Đã hoàn thành</a>
                    </div>
                  ) : (
                    <div className="overview-genre">
                      <a href="/">Chưa hoàn thành</a>
                    </div>
                  )}
                </li>
                <li className="overview-content">
                  <div className="overview-content__label">Mô tả:</div>
                  {novel.info.description}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
