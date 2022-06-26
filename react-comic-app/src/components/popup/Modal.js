import React from "react";
import { Button } from "react-bootstrap";
import ReactDOM from 'react-dom'
import "../../css/popup/modal.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ 
  children, 
  height = '80%', 
  width = 800, 
  isShow, 
  close = () => {},
  save = () => {},
  cancel = async () => {},
  modalTitle = "Thêm mới"
}) {

  const handleCancel = () => {
    close();
    cancel();
  }

  const handleSave = (...arg) => {
    save(...arg);
    close();
  }

  return ReactDOM.createPortal(
    <div style={{display: isShow ? '' : 'none'}}  className="modal-overlay">
      <div style={{height: height, width: width}} className="modal-popup">
        <div className="popup__header">
          <div className="header-left">
            {modalTitle}
          </div>
          <div className="header-right">
            <AiOutlineClose className="pointer" onClick={close} size={20} />
          </div>
        </div>
        <div className="popup__content">
          { children }
        </div>
        <div className="popup__footer">
          <div className="footer-left"></div>
          <div className="footer-right">
            <Button onClick={handleCancel} variant="secondary">Huỷ</Button>
            <Button onClick={handleSave} variant="primary">Lưu</Button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#root'),
  );
}
