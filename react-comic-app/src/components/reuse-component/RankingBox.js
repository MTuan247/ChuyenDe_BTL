import React, { useEffect, useState } from "react";
import { RiEyeLine, RiHeart3Fill, RiMedalFill, RiBookmark3Fill } from "react-icons/ri";
import axios from "axios";
import "../../css/rankingbox.css";

export default function RankingBox(props) {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://localhost:44311/api/Comic");

      let dataLong = data.data;

      if (props.sort === "like") {
        dataLong = [...dataLong].sort((a, b) => b.Like - a.Like);
      } else if (props.sort === "view") {
        dataLong = [...dataLong].sort((a, b) => b.Subcribe - a.Subcribe);
      } else if (props.sort === "follow") {
        dataLong = [...dataLong].sort((a, b) => b.Subcribe - a.Subcribe);
      }

      const dataShort = dataLong.slice(0, 10);

      setNovels(dataShort);
    };

    fetchData().catch(console.error);
  }, []);

  let rankingNameArr, rankingValueArr;

  rankingNameArr = novels.map(({ ComicName, ComicId }) => (
    <a className="ranking__name line-1" href="/" key={ComicId}>
      {ComicName}
    </a>
  ));

  switch (props.sort) {
    case "view":
      rankingValueArr = novels.map(({ Subcribe, ComicId }) => (
        <span className="ranking__value" key={ComicId}>
          <RiEyeLine /> {Subcribe}
        </span>
      ));
      break;
    case "like":
      rankingValueArr = novels.map(({ Like, ComicId }) => (
        <span className="ranking__value" key={ComicId}>
          <RiHeart3Fill className="color-heart" /> {Like}
        </span>
      ));
      break;
    case "subcribe":
      rankingValueArr = novels.map(({ Subcribe, ComicId }) => (
        <span className="ranking__value" key={ComicId}>
          <RiBookmark3Fill className="color-dodgerblue" /> {Subcribe}
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
