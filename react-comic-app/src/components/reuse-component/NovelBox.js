import React from "react";
import { Row, Col } from "react-bootstrap";
import NovelBoxItem from "./NovelBoxItem";
import "../../css/novelbox.css";

export default function NovelBox(props) {
  const novelArr = [
    {
      info: {
        img: "https://i.imgur.com/F4YrlR5.jpg",
        name: "Nhất Thống Thiên Hạ",
        description:
          "Một ông trùm xã hội đen khi về làm vua thời cổ đại sẽ gặp những cảnh ngộ ra sao? Một đất nước loạn lạc khắp nơi có được bình định hay không? Một đế chế hùng mạnh sẽ được dựng nên như thế nào? Một hôn quân, một bạo chúa, hay một minh quân sẽ xuất thế?",
        genre: "Tu tiên",
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
    },

    {
      info: {
        img: "https://i.imgur.com/BhKGqHl.jpg",
        name: "Tiến Hóa Tại Vô Hạn Thế Giới",
        description:
          "Quá khứ như một bàn tay vô hình bóp lấy cổ hắn, dìm hắn xuống nước, ép cho hắn không thở nổi. Nhưng hắn lại chỉ có thể mang theo thống khổ và tuyệt vọng mà sống, giống một kẻ mãi mãi lạc lối trong bóng đêm, không tìm thấy được ánh sáng.",
        genre: "Chuyển sinh",
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

      id: "00002",
    },

    {
      info: {
        img: "https://i.imgur.com/qiu52TA.jpg",
        name: "Hùng Ca Đại Việt",
        description:
          "Sử nước Việt ta là một bản Hùng Ca bi tráng. thế nhưng những dấu vết lịch sử ghi lại còn bao. bao danh nhân, bao chiến tướng đều lưu mờ theo dòng thời gian lịch sử. dân ta lại không biết sử ta, mà lại thuộc sử tàu. ta rất thống hận, rất uất ức. Hùng Ca Đại Việt chính là một ngọn lửa muốn truyền cho sau này, hiểu sử ta, yêu sử ta, ghi ơn những người gầy dựng đất nước tươi đẹp này.",
        genre: "Dã sử",
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

      id: "00003",
    },

    {
      info: {
        img: "https://i.imgur.com/Ws5OQ4d.jpg",
        name: "Nhất Thống Thiên Hạ",
        description:
          "Một ông trùm xã hội đen khi về làm vua thời cổ đại sẽ gặp những cảnh ngộ ra sao? Một đất nước loạn lạc khắp nơi có được bình định hay không? Một đế chế hùng mạnh sẽ được dựng nên như thế nào? Một hôn quân, một bạo chúa, hay một minh quân sẽ xuất thế?",
        genre: "Tu tiên",
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

      id: "00004",
    },

    {
      info: {
        img: "https://i.imgur.com/afjKCiD.jpg",
        name: "Tiến Hóa Tại Vô Hạn Thế Giới",
        description:
          "Quá khứ như một bàn tay vô hình bóp lấy cổ hắn, dìm hắn xuống nước, ép cho hắn không thở nổi. Nhưng hắn lại chỉ có thể mang theo thống khổ và tuyệt vọng mà sống, giống một kẻ mãi mãi lạc lối trong bóng đêm, không tìm thấy được ánh sáng.",
        genre: "Chuyển sinh",
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

      id: "00005",
    },

    {
      info: {
        img: "https://i.imgur.com/lwrH296.jpg",
        name: "Hùng Ca Đại Việt",
        description:
          "Sử nước Việt ta là một bản Hùng Ca bi tráng. thế nhưng những dấu vết lịch sử ghi lại còn bao. bao danh nhân, bao chiến tướng đều lưu mờ theo dòng thời gian lịch sử. dân ta lại không biết sử ta, mà lại thuộc sử tàu. ta rất thống hận, rất uất ức. Hùng Ca Đại Việt chính là một ngọn lửa muốn truyền cho sau này, hiểu sử ta, yêu sử ta, ghi ơn những người gầy dựng đất nước tươi đẹp này.",
        genre: "Dã sử",
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

      id: "00006",
    },
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
          {novelArr.map(({ info, states, id }) => (
            <Col xs="12" md="6">
              <NovelBoxItem info={info} states={states} focusState={props.novelType} key={id} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
