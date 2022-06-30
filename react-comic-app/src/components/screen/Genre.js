import React, { useState, useEffect } from "react";
import { Col, Row, Accordion, ToggleButton, ToggleButtonGroup, Pagination } from "react-bootstrap";
import {} from "react-router-dom";
import axios from "axios";
import NovelBoxItem from "../reuse-component/NovelBoxItem";
import "../../css/genre.css";

export default function Genre() {
  const novelsPerPage = 24;

  const genreList = [
    {
      id: 0,
      name: "Tất cả",
    },
    {
      id: 1,
      name: "Huyền huyễn",
    },
    {
      id: 2,
      name: "Tình cảm",
    },
    {
      id: 3,
      name: "Phiêu lưu",
    },
    {
      id: 4,
      name: "Hành động",
    },
    {
      id: 5,
      name: "Kịch tính",
    },
  ];

  const [novels, setNovels] = useState({
    totalTodo: [],
    currentTodo: [],
  });

  const [pages, setPages] = useState({
    currentPage: 1,
    indexLast: 24,
    indexFirst: 0,
  });

  const [pageList, setPageList] = useState([]);

  const choosePage = (event) => {
    setPages({
      currentPage: Number(event.target.id),
      indexLast: Number(event.target.id) * novelsPerPage,
      indexFirst: Number(event.target.id) * novelsPerPage - novelsPerPage,
    });
    setNovels({
      currentTodo: novels.totalTodo.slice(pages.indexFirst, pages.indexLast),
    });
  };

  const sortData = (data, sortOrder) => {
    if (sortOrder === 0) {
      // 0 sort by modified date
      data.sort((a, b) => b.ModifiedDate - a.ModifiedDate);
    } else if (sortOrder === 1) {
      // 1 sort by view
      data.sort((a, b) => b.Like - a.Like);
    } else if (sortOrder === 2) {
      // 2 sort by like
      data.sort((a, b) => b.Like - a.Like);
    } else if (sortOrder === 3) {
      // 3 sort by subcribe
      data.sort((a, b) => b.Subcribe - a.Subcribe);
    } else if (sortOrder === 4) {
      // 4 sort by name
      data.sort((a, b) => a.ComicName - b.ComicName);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://localhost:44311/api/Comic");
      let totalData = data.data;
      let currentData = [];
      let pageNum = [];

      for (let i = 1; i <= Math.ceil(totalData.length / novelsPerPage); i++) {
        pageNum.push(i);
      }

      sortData(totalData, 0);
      currentData = totalData.slice(pages.indexFirst, pages.indexLast);
      setNovels({ totalTodo: totalData, currentTodo: currentData });
      setPageList(pageNum);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="genre-group">
      <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Thể loại</Accordion.Header>
          <Accordion.Body>
            <ToggleButtonGroup
              className="toggle-btn-group"
              name="genre"
              type="radio"
              defaultValue={0}
            >
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
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Sắp xếp theo</Accordion.Header>
          <Accordion.Body>
            <ToggleButtonGroup
              className="toggle-btn-group"
              name="sort"
              type="radio"
              defaultValue={1}
            >
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
                Lượt xem
              </ToggleButton>
              <ToggleButton
                className="filter-toggle-btn"
                id={"sort-toggle-btn-3"}
                variant="outline-primary"
                value={3}
              >
                Lượt yêu thích
              </ToggleButton>
              <ToggleButton
                className="filter-toggle-btn"
                id={"sort-toggle-btn-4"}
                variant="outline-primary"
                value={4}
              >
                Lượt theo dõi
              </ToggleButton>
              <ToggleButton
                className="filter-toggle-btn"
                id={"sort-toggle-btn-5"}
                variant="outline-primary"
                value={5}
              >
                Tên truyện
              </ToggleButton>
              <ToggleButton
                className="filter-toggle-btn"
                id={"sort-toggle-btn-6"}
                variant="outline-primary"
                value={6}
              >
                Đã hoàn thành
              </ToggleButton>
            </ToggleButtonGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="content-box">
        <div className="box-title">Danh sách truyện</div>
        <div className="box-content">
          <Row>
            {novels.currentTodo.map(
              ({ ComicName, Thumbnail, Description, Like, Subcribe, Chapter, Status, ComicId }) => (
                <Col xs="12" md="6" lg="4">
                  <NovelBoxItem
                    name={ComicName}
                    thumbnail={Thumbnail}
                    description={Description}
                    like={Like}
                    view={Subcribe}
                    chapter={Chapter}
                    status={Status}
                    icon={"modified-date"}
                    key={ComicId}
                    comicLink={"/Overview/" + ComicId}
                  />
                </Col>
              )
            )}
          </Row>
        </div>
      </div>
      <div className="content-pagination">
        <Pagination className="pagination-md justify-content-center">
          {pageList.map((id) => {
            if (id === pages.currentPage)
              return (
                <Pagination.Item
                  key={id}
                  id={id}
                  className={id === pages.currentPage ? "active" : ""}
                >
                  {id}
                </Pagination.Item>
              );
            else
              return (
                <Pagination.Item key={id} id={id} onclick={choosePage}>
                  {id}
                </Pagination.Item>
              );
          })}
        </Pagination>
      </div>
    </div>
  );
}
