import React from "react";
import NovelBox from "../reuse-component/NovelBox";
import RankingBox from "../reuse-component/RankingBox";
import { Row, Col } from "react-bootstrap";
import "../../css/home.css";
// import { PromiseRequest } from "../../utils";

export default function Home() {
  // let url = PromiseRequest.getServiceUrl("", "User");
  // PromiseRequest.send(url, {}, { method: "get" }).then(res => {
  //   console.log(res);
  // })

  return (
    <Row>
      <Col xs="12" lg="8" id="home-content">
        <NovelBox name="Truyện đề cử" sort="like" />
        <NovelBox name="Mới cập nhật" sort="modified-date" />
        <NovelBox name="Xem nhiều nhất" sort="view" />
        <NovelBox name="Đã hoàn thành" sort="status" />
      </Col>
      <Col xs="12" lg="4" id="home-ranking">
        <Row>
          <Col className="col-rank" sm="12" md="4" lg="12">
            <RankingBox name="Top lượt xem" sort="view" />
          </Col>
          <Col className="col-rank" sm="12" md="4" lg="12">
            <RankingBox name="Top yêu thích" sort="like" />
          </Col>
          <Col className="col-rank" sm="12" md="4" lg="12">
            <RankingBox name="Theo dõi" sort="subcribe" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
