import React from "react";
import { Col, Row, ToggleButton, ToggleButtonGroup, Pagination } from "react-bootstrap";
import {} from "react-router-dom";
import NovelBoxItem from "../reuse-component/NovelBoxItem";
import "../../css/genre.css";

export default function Genre() {
  const genreList = [
    {
      id: 1,
      name: "Bách hợp",
    },
    {
      id: 2,
      name: "Cổ đại",
    },
    {
      id: 3,
      name: "Cung đấu",
    },
    {
      id: 4,
      name: "Đam mỹ",
    },
    {
      id: 5,
      name: "Đô thị",
    },
    {
      id: 6,
      name: "Hệ thống",
    },
    {
      id: 7,
      name: "Kiếm hiệp",
    },
    {
      id: 8,
      name: "Lịch sử",
    },
    {
      id: 9,
      name: "Light novel",
    },
    {
      id: 10,
      name: "Ngôn tình",
    },
    {
      id: 11,
      name: "Tiên hiệp",
    },
    {
      id: 12,
      name: "Trọng sinh",
    },
    {
      id: 13,
      name: "Truyện ngắn",
    },
    {
      id: 14,
      name: "Tu tiên",
    },
    {
      id: 15,
      name: "Xuyên không",
    },
  ];

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
    <div className="genre-group">
      <div className="filter-genre-box">
        <div className="box-title">Thể loại</div>
        <ToggleButtonGroup className="toggle-btn-group" type="checkbox">
          {genreList.map(({ name, id }) => (
            <ToggleButton
              className="filter-toggle-btn"
              id={"genre-toggle-btn-" + id}
              variant="outline-primary"
              value={id}
            >
              {name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div className="filter-sort-box">
        <div className="box-title">Sắp xếp theo</div>
        <ToggleButtonGroup className="toggle-btn-group" name="sort" type="radio" defaultValue={1}>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-1"}
            variant="outline-primary"
            value={1}
          >
            Mới cập nhật
          </ToggleButton>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-2"}
            variant="outline-primary"
            value={2}
          >
            Lượt xem (Tổng)
          </ToggleButton>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-3"}
            variant="outline-primary"
            value={3}
          >
            Lượt xem (TB)
          </ToggleButton>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-4"}
            variant="outline-primary"
            value={4}
          >
            Điểm đánh giá
          </ToggleButton>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-5"}
            variant="outline-primary"
            value={5}
          >
            Lượt yêu thích
          </ToggleButton>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-6"}
            variant="outline-primary"
            value={6}
          >
            Lượt theo dõi
          </ToggleButton>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-7"}
            variant="outline-primary"
            value={7}
          >
            Số chương
          </ToggleButton>
          <ToggleButton
            className="filter-toggle-btn"
            id={"sort-toggle-btn-8"}
            variant="outline-primary"
            value={8}
          >
            Số bình luận
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="content-box">
        <div className="box-title">Danh sách truyện</div>
        <div className="box-content">
          <Row>
            {novelArr.map(({ info, states }) => (
              <Col xs="12" md="6" lg="4">
                <NovelBoxItem info={info} states={states} focusState="newest-update" />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="content-pagination">
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
