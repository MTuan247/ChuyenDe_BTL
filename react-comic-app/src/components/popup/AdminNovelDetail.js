import React, { useEffect, useRef, useState } from "react";
import "../../css/popup/adminnoveldetail.scss";
import Combobox from "react-widgets/Combobox";
import { Form, FormControl } from "react-bootstrap";
import moment from 'moment';
import { PromiseRequest } from "../../utils";

export default function AdminNovelDetail({ model, update = () => {} }) {

  const thumbnailControl = useRef(null);

  const [categories, setCategories] = useState([])

  const loadCategory = (param) => {
    let url = PromiseRequest.getServiceUrl("", "Category");
    PromiseRequest.send(url, {
      sortOrder: 2,
    }, { method: "get" }).then(res => {
      setCategories(res.data);
    })
  }

  useEffect(() => {
    loadCategory();
  }, [])

  const handleChange = (e, field) => {
    update(field, e.target.value);
  }

  const handleChangeSelect = (e, field) => {
    update(field, parseInt(e.target.value));
  }

  useEffect(() => {
  })

  return (
    <div className="admin-detail-screen">
      <Form>
        <Form.Group className="flex-row d-flex">
          <Form.Group style={{backgroundImage: `url(${thumbnailControl?.current?.value || ''})`}} className="thumbnail flex1">
          </Form.Group>
          <Form.Group className="flex2">

            <Form.Group>
              <Form.Label>Tên truyện</Form.Label>
              <FormControl value={model.ComicName || ''} field="ComicName" onChange={(e) => handleChange(e, 'ComicName')} className="custom-control" size="sm" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Đường dẫn tranh minh hoạ</Form.Label>
              <FormControl value={model.Thumbnail || ''} ref={thumbnailControl} onChange={(e) => handleChange(e, 'Thumbnail')} className="custom-control" size="sm" />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Số lượt thích</Form.Label>
              <FormControl value={model.Like || 0} className="custom-control" size="sm" disabled />
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Số lượt theo dõi</Form.Label>
              <FormControl value={model.Subcribe || 0} className="custom-control" size="sm" disabled />
            </Form.Group>
            
          </Form.Group>
        </Form.Group>
        <Form.Group>

          <Form.Group>
            <Form.Label>Tình trạng truyện</Form.Label>
            <Form.Select onChange={(e) => handleChangeSelect(e, 'Status')} value={model.Status || 0} className="custom-control" size="sm">
              <option value="0">Chưa hoàn thành </option>
              <option value="1">Hoàn thành</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Thể loại</Form.Label>
            <Combobox 
              value={model.CategoryId}
              data={categories}
              dataKey='CategoryId'
              textField='CategoryName'
              onChange={(value) => update('CategoryId', value.CategoryId)}
              placeholder="Thể loại truyện"
              hideEmptyPopup
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Mô tả truyện</Form.Label>
            <Form.Control onChange={(e) => handleChange(e, 'Description')} value={model.Description || ''} className="custom-control" size="sm" as="textarea" rows={3} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Ngày đăng truyện</Form.Label>
            <FormControl type="date" value={moment(model.CreatedDate).format("YYYY-MM-DD")} onChange={(e) => handleChange(e, 'CreatedDate')} className="custom-control" size="sm" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Ngày cập nhật truyện</Form.Label>
            <FormControl type="date" value={moment(model.ModifiedDate).format("YYYY-MM-DD")} onChange={(e) => handleChange(e, 'ModifiedDate')} className="custom-control" size="sm" />
          </Form.Group>
          
        </Form.Group>
      </Form>
    </div>
  );
}
