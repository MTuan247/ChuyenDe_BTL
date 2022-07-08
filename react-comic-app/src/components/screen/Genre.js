import React, { useState, useEffect } from "react";
import { Col, Row, Accordion, Pagination } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NovelBoxItem from "../reuse-component/NovelBoxItem";
import "../../css/genre.css";

export default function Genre() {
  const novelsPerPage = 24;

  const params = useParams();

  const [allNovels, setAllNovels] = useState([]);

  const [novels, setNovels] = useState([]);

  const [allGenres, setAllGenres] = useState([]);

  const [genre, setGenre] = useState(params.GenreId);

  const [sortOrder, setSortOrder] = useState(params.SortOrder);

  const [pageList, setPageList] = useState([]);

  const [pages, setPages] = useState({
    currentPage: params.PageNumber,
    indexFirst: novelsPerPage * params.PageNumber,
    indexLast: novelsPerPage * params.PageNumber + novelsPerPage,
  });

  const sortData = (data, sortOrder) => {
    if (sortOrder == 0) {
      // 0 sort by modified date
      data.sort((a, b) => b.ModifiedDate - a.ModifiedDate);
    } else if (sortOrder == 1) {
      // 1 sort by view
      data.sort((a, b) => b.Like + b.Subcribe - a.Like - a.Subcribe);
    } else if (sortOrder == 2) {
      // 2 sort by like
      data.sort((a, b) => b.Like - a.Like);
    } else if (sortOrder == 3) {
      // 3 sort by subcribe
      data.sort((a, b) => b.Subcribe - a.Subcribe);
    } else if (sortOrder == 4) {
      // 4 sort by name
      data.sort((a, b) => a.ComicName.localeCompare(b.ComicName));
    }
    console.log("sorted");
    console.log(data);
  };

  useEffect(() => {
    setGenre(params.GenreId);
    setSortOrder(params.SortOrder);
    setPages({
      currentPage: params.PageNumber,
      indexFirst: novelsPerPage * params.PageNumber,
      indexLast: novelsPerPage * params.PageNumber + novelsPerPage,
    });
  }, [params]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://localhost:44311/api/Category");
      setAllGenres(data.data);
    };

    fetchData().catch(console.error);
  }, [params]);

  useEffect(() => {
    const fetchData = async () => {
      const category = genre == 0 ? "" : genre;
      const data = await axios.get(
        "https://localhost:44311/api/Comic/Comics?categoryId=" +
          category +
          "&pageSize=1000&pageNumber=1"
      );
      let totalData = data.data.Data;
      let pageNum = [];

      console.log(totalData);

      for (let i = 0; i < Math.ceil(totalData.length / novelsPerPage); i++) {
        pageNum.push(i);
      }

      sortData(totalData, sortOrder);
      setAllNovels(totalData);

      setPageList(pageNum);
    };

    fetchData().catch(console.error);
  }, [genre, sortOrder]);

  useEffect(() => {
    const data = allNovels.slice(pages.indexFirst, pages.indexLast);
    setNovels(data);
  }, [pages, allNovels]);

  return (
    <div className="genre-group">
      <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Thể loại</Accordion.Header>
          <Accordion.Body>
            {genre == 0 ? (
              <Link className="btn btn-primary" to={"/Genre/0/" + sortOrder + "/0"}>
                Tất cả
              </Link>
            ) : (
              <Link className="btn btn-outline-primary" to={"/Genre/0/" + sortOrder + "/0"}>
                Tất cả
              </Link>
            )}

            {allGenres.map(({ CategoryName, CategoryId }) => {
              if (genre == CategoryId)
                return (
                  <Link
                    className="btn btn-primary"
                    to={"/Genre/" + CategoryId + "/" + sortOrder + "/0"}
                    key={CategoryId}
                  >
                    {CategoryName}
                  </Link>
                );
              else
                return (
                  <Link
                    className="btn btn-outline-primary"
                    to={"/Genre/" + CategoryId + "/" + sortOrder + "/0"}
                    key={CategoryId}
                  >
                    {CategoryName}
                  </Link>
                );
            })}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Sắp xếp theo</Accordion.Header>
          <Accordion.Body>
            {sortOrder == 0 ? (
              <Link className="btn btn-primary" to={"/Genre/" + genre + "/0/0"}>
                Mới cập nhật
              </Link>
            ) : (
              <Link className="btn btn-outline-primary" to={"/Genre/" + genre + "/0/0"}>
                Mới cập nhật
              </Link>
            )}
            {sortOrder == 1 ? (
              <Link className="btn btn-primary" to={"/Genre/" + genre + "/1/0"}>
                Lượt xem
              </Link>
            ) : (
              <Link className="btn btn-outline-primary" to={"/Genre/" + genre + "/1/0"}>
                Lượt xem
              </Link>
            )}
            {sortOrder == 2 ? (
              <Link className="btn btn-primary" to={"/Genre/" + genre + "/2/0"}>
                Lượt yêu thích
              </Link>
            ) : (
              <Link className="btn btn-outline-primary" to={"/Genre/" + genre + "/2/0"}>
                Lượt yêu thích
              </Link>
            )}
            {sortOrder == 3 ? (
              <Link className="btn btn-primary" to={"/Genre/" + genre + "/3/0"}>
                Lượt theo dõi
              </Link>
            ) : (
              <Link className="btn btn-outline-primary" to={"/Genre/" + genre + "/3/0"}>
                Lượt theo dõi
              </Link>
            )}
            {sortOrder == 4 ? (
              <Link className="btn btn-primary" to={"/Genre/" + genre + "/4/0"}>
                Tên truyện
              </Link>
            ) : (
              <Link className="btn btn-outline-primary" to={"/Genre/" + genre + "/4/0"}>
                Tên truyện
              </Link>
            )}
            {sortOrder == 5 ? (
              <Link className="btn btn-primary" to={"/Genre/" + genre + "/5/0"}>
                Đã hoàn thành
              </Link>
            ) : (
              <Link className="btn btn-outline-primary" to={"/Genre/" + genre + "/5/0"}>
                Đã hoàn thành
              </Link>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="content-box">
        <div className="box-title">Danh sách truyện</div>
        <div className="box-content">
          <Row>
            {novels.map(
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
            if (id == pages.currentPage)
              return (
                <Pagination.Item key={id} className="active">
                  {id + 1}
                </Pagination.Item>
              );
            else
              return (
                <Pagination.Item key={id}>
                  <Link to={"/Genre/" + genre + "/" + sortOrder + "/" + id}>{id + 1}</Link>
                </Pagination.Item>
              );
          })}
        </Pagination>
      </div>
    </div>
  );
}
