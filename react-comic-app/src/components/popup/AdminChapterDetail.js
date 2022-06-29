import React, { useEffect, useRef, useState } from "react";
import "../../css/popup/adminnoveldetail.scss";
import { PromiseRequest } from "../../utils";
import { Form, FormControl } from "react-bootstrap";
import moment from 'moment';

export default function AdminNovelDetail({ model, update = () => {} }) {

  const handleChange = (e, field) => {
    update(field, e.target.value);
  }

  useEffect(() => {
  })

  return (
    <div className="admin-detail-screen">
      <Form>
        <Form.Group className="flex-row d-flex">
          <Form.Group className="flex2">

            <Form.Group>
              <Form.Label>Tên chương</Form.Label>
              <FormControl value={model.ChapterName || ''} onChange={(e) => handleChange(e, 'ChapterName')} className="custom-control" size="sm" />
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
            <Form.Label>Nội dung chương</Form.Label>
            <Form.Control onChange={(e) => handleChange(e, 'Content')} value={model.Content || ''} className="custom-control" size="sm" as="textarea" rows={10} />
          </Form.Group>
          
        </Form.Group>
      </Form>
    </div>
  );
}
