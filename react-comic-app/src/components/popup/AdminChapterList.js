import React, { useState } from "react";
import { Row, Table, Button } from "react-bootstrap";
import "../../css/reuse-component/adminchapterlist.scss";
import { BiPencil, BiTrash } from "react-icons/bi";

export default function AdminChapterList(props) {

  const chapterList = [];
  
  const [render, reRender] = useState(0);

  const handleRerender = () => {
    reRender(render+1);
  }

  return (
    <div className="admin-chapter-list">
      <div className="novel-box__head">
        <div className="novel-box__head__title">{props.name}</div>
        <Button onClick={() => props.add()} variant="primary">Thêm</Button>
      </div>
      <div className="novel-box__body">
        <Row>
          <Table bordered hover size="sm">
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
                  <tr onDoubleClick={() => props.clickItem(chapter)} >
                    <td>{chapter.ComicName}</td>
                    <td>{chapter.Like}</td>
                    <td>{chapter.Subcribe}</td>
                    <td>
                      <div className="flex1 d-flex table-action">
                        <BiPencil title="Sửa" onClick={() => props.clickItem(chapter)} size={20} />
                        <BiTrash title="Xoá" onClick={() => props.deleteItem(chapter)} size={20} />
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Row>
      </div>
    </div>
  );
}
