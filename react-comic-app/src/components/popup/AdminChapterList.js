import React, { useEffect, useState } from "react";
import { Row, Table, Button } from "react-bootstrap";
import "../../css/popup/adminchapterlist.scss";
import { BiPencil, BiTrash } from "react-icons/bi";
import { PromiseRequest } from "../../utils";
import Modal from "./Modal";
import AdminChapterDetail from "./AdminChapterDetail";

export default function AdminChapterList(props) {

  const [chapterList, setChapterList] = useState([]);

  const [showChapterDetail, setShowChapterDetail] = useState(false);

  const [model, setModel] = useState({});
  const [modalTitle, setModalTitle] = useState("");
  const [mode, setMode] = useState("view");

  useEffect(() => {
    if (props.model.ComicId) {
      load();
    }
  }, [props.model.ComicId])

  const load = (param) => {
    let url = PromiseRequest.getServiceUrl("Chapters", "Comic");
    PromiseRequest.send(url, {
      comicId: param?.ComicId || props.model.ComicId,
      pageNumber: param?.searchNumber || 1,
      pageSize: param?.pageSize || 1000,
    }, { method: "get" }).then(res => {
      setChapterList(res.data.Data);
    })
  }

  const clickItem = (model) => {
    setModel(model);
    setShowChapterDetail(true);
    setModalTitle(model.ChapterName);
    setMode("update");
  }

  const add = () => {
    setModel({});
    setShowChapterDetail(true);
    setModalTitle(null);
    setMode("add");
  }

  const handleSave = async () => {
    let url = PromiseRequest.getServiceUrl("", "Chapter");
    PromiseRequest.send(url, model, { 
      method: mode === 'update' ? 'put' : 'post'
    }).then(() => {
      load();
    });
  }

  const deleteItem = (model) => {
    let url = PromiseRequest.getServiceUrl("", "Chapter");
    PromiseRequest.send(url, model, { 
      method: 'delete'
    }).then(() => {
      load();
    });
  }

  const updateValue = (field, value) => {
    setModel({
      ...model,
      [field]: value,
    });
  }

  return (
    <div className="admin-chapter-list">
      <div className="admin-novel-box__head">
        <div className="admin-novel-box__head__title">{props.name}</div>
        <Button onClick={() => add()} variant="primary">Thêm</Button>
      </div>
      <div className="admin-novel-box__body">
        <Table size="sm">
          <thead>
            <tr>
              <th>Tên chương</th>
              <th>Số lượt thích</th>
              <th>Số lượt theo dõi</th>
              <th className="text-center">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {
              chapterList.map((chapter) => (
                <tr key={chapter.ChapterId} onDoubleClick={() => props.clickItem(chapter)} >
                  <td>{chapter.ChapterName}</td>
                  <td>{chapter.Like}</td>
                  <td>{chapter.Subcribe}</td>
                  <td>
                    <div className="flex1 d-flex table-action">
                      <BiPencil title="Sửa" onClick={() => clickItem(chapter)} size={20} />
                      <BiTrash title="Xoá" onClick={() => deleteItem(chapter)} size={20} />
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
      <Modal save={handleSave} modalTitle={modalTitle || "Thêm mới"} close={() => setShowChapterDetail(false)} isShow={showChapterDetail}>
        {
          showChapterDetail ? (
            <AdminChapterDetail update={updateValue} model={model} />
          ) : (
            <></>
          )
        }
      </Modal>
    </div>
  );
}
