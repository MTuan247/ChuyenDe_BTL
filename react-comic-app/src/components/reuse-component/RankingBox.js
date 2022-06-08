import React from "react";
import { RiEyeLine, RiHeart3Fill, RiMedalFill, RiStarFill } from "react-icons/ri";
import "../../css/rankingbox.css";

export default function RankingBox(props) {
  const novelArr = [
    {
      info: {
        img: "",
        name: "Nhất Thống Thiên Hạ",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
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
        img: "",
        name: "Tiến Hóa Tại Vô Hạn Thế Giới",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
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
        img: "",
        name: "Hùng Ca Đại Việt",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
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
        img: "",
        name: "Nguyên Tố Đại Lục",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
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
        img: "",
        name: "Ma Thần Thiên Quân",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
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
        img: "",
        name: "Nhất Kiếp Tiên Phàm",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
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
        img: "",
        name: "Đông Ly Trần Kiếp Diệt",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
        chapter: 234,
        view: 12947,
        like: 1221,
        rate: {
          ratePoints: 4.5,
          rateTimes: 1447,
        },
      },

      id: "00007",
    },
    {
      info: {
        img: "",
        name: "Huyền Lục",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
        chapter: 234,
        view: 12947,
        like: 1221,
        rate: {
          ratePoints: 4.5,
          rateTimes: 1447,
        },
      },

      id: "00008",
    },
    {
      info: {
        img: "",
        name: "Tối Cường Trang Bức Đả Kiểm Hệ Thống",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
        chapter: 234,
        view: 12947,
        like: 1221,
        rate: {
          ratePoints: 4.5,
          rateTimes: 1447,
        },
      },

      id: "00009",
    },
    {
      info: {
        img: "",
        name: "Tòng Tiền Hữu Tọa Linh Kiếm Sơn",
        description: "",
        genre: "",
      },

      states: {
        lastUpdate: "2022-12-12",
        commplete: true,
        chapter: 234,
        view: 12947,
        like: 1221,
        rate: {
          ratePoints: 4.5,
          rateTimes: 1447,
        },
      },

      id: "00010",
    },
  ];

  const demo = {
    info: {
      img: "",
      name: "Tòng Tiền Hữu Tọa Linh Kiếm Sơn",
      description: "",
      genre: "",
    },

    states: {
      lastUpdate: "2022-12-12",
      commplete: true,
      chapter: 234,
      view: 12947,
      like: 1221,
      rate: {
        ratePoints: 4.5,
        rateTimes: 1447,
      },
    },

    id: "00010",
  };

  const type = props.rankingType;
  let rankingNameArr = [];
  let rankingValueArr = [];

  rankingNameArr = novelArr.map(({ info, id }) => (
    <a className="ranking__name line-1" href="/" key={id}>
      {info.name}
    </a>
  ));

  switch (type) {
    case "view":
      rankingValueArr = novelArr.map(({ states, id }) => (
        <span className="ranking__value" key={id}>
          <RiEyeLine /> {states.view}
        </span>
      ));
      break;
    case "like":
      rankingValueArr = novelArr.map(({ states, id }) => (
        <span className="ranking__value" key={id}>
          <RiHeart3Fill className="color-heart" /> {states.like}
        </span>
      ));
      break;
    case "rate":
      rankingValueArr = novelArr.map(({ states, id }) => (
        <span className="ranking__value" key={id}>
          <RiStarFill className="color-gold" /> {states.rate.ratePoints}
        </span>
      ));
      break;
    default:
      break;
  }

  return (
    <div className="ranking-box">
      <div className="ranking-box__head">
        <div className="ranking-box__head__title">{props.name}</div>
        <div className="ranking-box__head__link">
          <a href="/">Xem tất cả</a>
        </div>
      </div>
      <div className="ranking-box__body">
        <div className="ranking-item">
          <span className="ranking__number">
            <RiMedalFill className="medal color-gold" />
          </span>
          {rankingNameArr[0]}
          {rankingValueArr[0]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">
            <RiMedalFill className="medal color-silver" />
          </span>
          {rankingNameArr[1]}
          {rankingValueArr[1]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">
            <RiMedalFill className="medal color-bronze" />
          </span>
          {rankingNameArr[2]}
          {rankingValueArr[2]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">4</span>
          {rankingNameArr[3]}
          {rankingValueArr[3]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">5</span>
          {rankingNameArr[4]}
          {rankingValueArr[4]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">6</span>
          {rankingNameArr[5]}
          {rankingValueArr[5]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">7</span>
          {rankingNameArr[6]}
          {rankingValueArr[6]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">8</span>
          {rankingNameArr[7]}
          {rankingValueArr[7]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">9</span>
          {rankingNameArr[8]}
          {rankingValueArr[8]}
        </div>

        <div className="ranking-item">
          <span className="ranking__number">10</span>
          {rankingNameArr[9]}
          {rankingValueArr[9]}
        </div>
      </div>
    </div>
  );
}
