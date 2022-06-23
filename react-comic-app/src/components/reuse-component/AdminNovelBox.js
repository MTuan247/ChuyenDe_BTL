import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminNovelBoxItem from "./AdminNovelBoxItem";
import "../../css/reuse-component/adminnovelbox.css"

export default function NovelBox(props) {
  const novelArr = [
    // {
    //   info: {
    //     img: "https://i.imgur.com/F4YrlR5.jpg",
    //     name: "Nhất Thống Thiên Hạ",
    //     description:
    //       "Một ông trùm xã hội đen khi về làm vua thời cổ đại sẽ gặp những cảnh ngộ ra sao? Một đất nước loạn lạc khắp nơi có được bình định hay không? Một đế chế hùng mạnh sẽ được dựng nên như thế nào? Một hôn quân, một bạo chúa, hay một minh quân sẽ xuất thế?",
    //     genre: "Tu tiên",
    //   },

    //   states: {
    //     lastUpdate: "2022-12-12",
    //     complete: true,
    //     chapter: 234,
    //     view: 12947,
    //     like: 1221,
    //     rate: {
    //       ratePoints: 4.5,
    //       rateTimes: 1447,
    //     },
    //   },

    //   id: "00001",
    // },
    ...props.list
  ];

  return (
    <div className="novel-box">
      <div className="novel-box__head">
        <div className="novel-box__head__title">{props.name}</div>
        <div className="novel-box__head__link">
          <a href="/">Xem tất cả</a>
        </div>
      </div>
      <div className="novel-box__body">
        <Row>
          {novelArr.map((novel) => (
            <Col xs="12" md="4">
              <AdminNovelBoxItem clickItem={props.clickItem} info={novel} focusState={props.novelType} key={novel.ComicId} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
