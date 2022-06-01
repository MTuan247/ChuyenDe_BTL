import React from "react";
import TheSearchBar from "../layout/TheSearchBar";
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
    <>
      <TheSearchBar />
      <div className="container">
        <div className="body-container">
          <Row>
            <Col xs="12" lg="8" className="main-content">
              <NovelBox name="Truyện đề cử" novelType="suggest" />
              <NovelBox name="Mới cập nhật" novelType="newest-update" />
              <NovelBox name="Xem nhiều nhất" novelType="most-view" />
              <NovelBox name="Đã hoàn thành" novelType="complete" />
            </Col>
            <Col xs="12" lg="4" className="side-content">
              <Row>
                <Col className="col-rank" sm="12" md="4" lg="12">
                  <RankingBox name="Top lượt xem" rankingType="view" />
                </Col>
                <Col className="col-rank" sm="12" md="4" lg="12">
                  <RankingBox name="Top lượt thích" rankingType="like" />
                </Col>
                <Col className="col-rank" sm="12" md="4" lg="12">
                  <RankingBox name="Top đánh giá" rankingType="rate" />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
