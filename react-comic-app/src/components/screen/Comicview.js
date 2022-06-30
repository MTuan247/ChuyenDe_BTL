import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../../css/comicview.css";

export default function Overview() {
  // const tokenDescription = novel.info.description.split(/\r?\n/);

  const params = useParams();

  const [comicInfo, setComicInfo] = useState({
    ComicName: "",
    CurrIndex: 0,
    PrevId: null,
    NextId: null,
  });

  const [chapter, setChapter] = useState({
    ChapterId: 0,
    ChapterCode: null,
    ChapterName: "",
    Like: 0,
    ComicId: 2,
    Content: "",
  });

  const findIndex = (data, id) => {
    let curr = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].ChapterId == id) {
        curr = i;
        break;
      }
    }
    return curr;
  };

  const findPrevId = (data, id) => {
    const curr = findIndex(data, id);
    if (curr <= 0) return id;
    return data[curr - 1].ChapterId;
  };

  const findNextId = (data, id) => {
    const curr = findIndex(data, id);
    if (curr >= data.length - 1) return id;
    return data[curr + 1].ChapterId;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://localhost:44311/api/Chapter/" + params.ChapterId);
      console.log(data);
      setChapter(data.data);
      const Data = await axios.get("https://localhost:44311/api/Comic/" + params.ComicId);
      console.log(Data.data);

      const chapters = Data.data.Chapters;
      console.log(chapters);
      setComicInfo({
        ComicName: Data.data.ComicName,
        CurrIndex: findIndex(chapters, params.ChapterId),
        PrevId: findPrevId(chapters, params.ChapterId),
        NextId: findNextId(chapters, params.ChapterId),
      });
    };

    fetchData().catch(console.error);
  }, [params.ComicId, params.ChapterId]);

  return (
    <div className="comic-view">
      <div className="prev-next-group">
        <Link to={"/Overview/" + params.ComicId + "/Read/" + comicInfo.PrevId}>
          <Button variant="outline-primary" className="prev-btn">
            Chương trước
          </Button>
        </Link>
        <Link to={"/Overview/" + params.ComicId + "/Read/" + comicInfo.NextId}>
          <Button variant="outline-primary" className="next-btn">
            Chương sau
          </Button>
        </Link>
      </div>

      <div className="comic-content-group">
        <div className="comic-title">{comicInfo.ComicName}</div>
        <div className="chapter-title">
          {"Chương " + (comicInfo.CurrIndex + 1) + ": " + chapter.ChapterName}
        </div>
        <div className="chapter-content">
          {chapter.Content.split(/\r?\n/).map((token) => (
            <p>{token}</p>
          ))}
        </div>
      </div>

      <div className="prev-next-group">
        <Link to={"/Overview/" + params.ComicId + "/Read/" + comicInfo.PrevId}>
          <Button variant="outline-primary" className="prev-btn">
            Chương trước
          </Button>
        </Link>
        <Link to={"/Overview/" + params.ComicId + "/Read/" + comicInfo.NextId}>
          <Button variant="outline-primary" className="next-btn">
            Chương sau
          </Button>
        </Link>
      </div>
    </div>
  );
}
