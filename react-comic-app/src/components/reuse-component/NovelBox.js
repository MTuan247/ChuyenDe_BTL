import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import NovelBoxItem from "./NovelBoxItem";
import axios from "axios";
import "../../css/novelbox.css";

export default function NovelBox(props) {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://localhost:44311/api/Comic");

      let dataLong = data.data;

      if (props.sort === "like") {
        dataLong = [...dataLong].sort((a, b) => b.Like - a.Like);
      } else if (props.sort === "modified-date") {
        dataLong = [...dataLong].sort((a, b) => b.ModifiedDate - a.ModifiedDate);
      } else if (props.sort === "view") {
        dataLong = [...dataLong].sort((a, b) => b.Subcribe - a.Subcribe);
      } else if (props.sort === "status") {
        dataLong = [...dataLong].sort((a, b) => b.Status - a.Status);
      }

      const dataShort = dataLong.slice(0, 6);

      setNovels(dataShort);
    };

    fetchData().catch(console.error);
  }, []);

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
          {novels.map(
            ({ ComicName, Thumbnail, Description, Like, Subcribe, Chapter, Status, ComicId }) => (
              <Col xs="12" md="6">
                <NovelBoxItem
                  name={ComicName}
                  thumbnail={Thumbnail}
                  description={Description}
                  like={Like}
                  view={Subcribe}
                  chapter={Chapter}
                  status={Status}
                  icon={props.sort}
                  key={ComicId}
                />
              </Col>
            )
          )}
        </Row>
      </div>
    </div>
  );
}
