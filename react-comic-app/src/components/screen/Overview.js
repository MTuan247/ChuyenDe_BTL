import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../css/overview.css";

export default function Overview() {
  // const tokenDescription = novel.info.description.split(/\r?\n/);

  const params = useParams();

  const [novel, setNovel] = useState({
    ComicId: 1,
    ComicCode: null,
    ComicName: "",
    Like: 0,
    Subcribe: 0,
    Chapter: 0,
    Thumbnail: null,
    Description: null,
    CreatedDate: "2002-06-08T21:09:30",
    ModifiedDate: "2002-06-08T21:09:30",
    Chapters: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://localhost:44311/api/Comic/" + params.ComicId);
      console.log(data.data);
      setNovel(data.data);
    };

    fetchData().catch(console.error);
  }, [params.ComicId]);

  return (
    <div className="overview-group">
      <div className="overview-info">
        <div className="overview-left">
          {novel.Thumbnail === null ? (
            <div
              className="info-img"
              style={{
                background: `url(https://telefoneame.com.mx/img/demos/shop/products/product1.jpg)`,
              }}
            ></div>
          ) : (
            <div className="info-img" style={{ background: `url(${novel.Thumbnail})` }}></div>
          )}
          <div>
            <Button className="overview-btn" variant="outline-dark">
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
              Bình luận
            </Button>
          </div>
        </div>

        <div className="info-detail">
          <div className="info-detail__title">{novel.ComicName}</div>
          <div className="info-detail__content">
            <ul>
              <li className="info-content">
                <div className="info-content__label">Tác giả:</div>
                <div className="info-content__detail">Đang cập nhật</div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Thể loại:</div>
                <div className="info-content__detail">Đang cập nhật</div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Theo dõi:</div>
                <div className="info-content__detail">{novel.Subcribe} lượt theo dõi</div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Lượt thích:</div>
                <div className="info-content__detail">{novel.Like} lượt thích</div>
              </li>
              <li className="info-content">
                <div className="info-content__label">Giới thiệu:</div>
                {novel.Description === null ? (
                  <div className="info-content__detail">Đang cập nhật</div>
                ) : (
                  <div className="info-content__des">
                    {novel.Description.split(/\r?\n/).map((token) => (
                      <p>{token}</p>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overview-chapters">
        <div className="overview-chapters__title">Danh sách chương</div>
        <Row>
          {novel.Chapters.map(({ ChapterName, ChapterId }, index) => (
            <Col
              xs="12"
              sm="6"
              md="4"
              lg="3"
              className="line-1 overview-chapters__item"
              key={index}
            >
              <Link to={"/Overview/" + novel.ComicId + "/Read/" + ChapterId}>
                Chương {index + 1}: {ChapterName}
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
