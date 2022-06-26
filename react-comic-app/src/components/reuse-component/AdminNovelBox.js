import React, { useState } from "react";
import { Row, Table, Button } from "react-bootstrap";
import "../../css/reuse-component/adminnovelbox.scss";
import { BiPencil, BiTrash, BiDetail } from "react-icons/bi";
import moment from 'moment';

export default function AdminNovelBox(props) {
  const novelArr = [
    ...props.list
  ];

  const genStatus = (status) => {
    switch (status) {
      case 0:
        return "Chưa hoàn thành";
      case 1:
        return "Hoàn thành";
      default:
        return "";
    }
  }

  return (
    <div className="admin-novel-box">
      <div className="novel-box__head">
        <div className="novel-box__head__title">{props.name}</div>
        <Button onClick={() => props.add()} variant="primary">Thêm</Button>
      </div>
      <div className="novel-box__body">
        <Row>
          <Table bordered hover size="sm">
            <thead>
              <tr>
                <th>Hình minh hoạ</th>
                <th>Tên truyện</th>
                <th>Số lượt thích</th>
                <th>Số chương</th>
                <th>Số lượt theo dõi</th>
                <th>Trạng thái</th>
                <th>Ngày đăng</th>
                <th>Ngày cập nhật</th>
                <th className="text-center">Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {
                novelArr.map((novel) => (
                  <tr onDoubleClick={() => props.clickItem(novel)} >
                    <td>
                      <div style={{ height: "72px", width: "auto", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: `url(${novel.Thumbnail})`  }}>
                      </div>
                    </td>
                    <td>{novel.ComicName}</td>
                    <td>{novel.Like}</td>
                    <td>{novel.Chapter}</td>
                    <td>{novel.Subcribe}</td>
                    <td>{genStatus(novel.Status)}</td>
                    <td>{novel.CreatedDate ? moment(novel.CreatedDate).format('DD/MM/YYYY') : ''}</td>
                    <td>{novel.ModifiedDate ? moment(novel.ModifiedDate).format('DD/MM/YYYY') : ''}</td>
                    <td>
                      <div className="flex1 d-flex table-action">
                        <BiPencil title="Sửa" onClick={() => props.clickItem(novel)} size={20} />
                        <BiDetail title="Chi tiết chương" onClick={() => props.chapterList(novel)} size={20} />
                        <BiTrash title="Xoá" onClick={() => props.deleteItem(novel)} size={20} />
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
