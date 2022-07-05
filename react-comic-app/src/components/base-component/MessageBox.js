import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { hide } from "../../redux/reducer/messageBoxReducer";
import { Button } from "react-bootstrap";
import "../../css/popup/modal.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Spinner(props) {

  const show = useSelector((state) => state.messageBoxReducer.show);
  const title = useSelector((state) => state.messageBoxReducer.title);
  const content = useSelector((state) => state.messageBoxReducer.content);
  const ok = useSelector((state) => state.messageBoxReducer.ok);
  const cancel = useSelector((state) => state.messageBoxReducer.cancel);

  const dispatch = useDispatch();

  const close = () => {
    dispatch(hide())
  }

  const handleOk = (props) => {
    ok(props);
    close();
  }

  const handleCancel = (props) => {
    cancel(props);
    close();
  }

  return (
    <>
      {
        show ? (

          <div className="modal-overlay">
            <div style={{ height: 200, width: 500 }} className="modal-popup">
              <div className="popup__header">
                <div className="header-left">
                  {title}
                </div>
                <div className="header-right">
                  <AiOutlineClose className="pointer" onClick={close} size={20} />
                </div>
              </div>
              <div className="popup__content">
                {content}
              </div>
              <div className="popup__footer">
                <div className="footer-left"></div>
                <div className="footer-right">
                  <Button onClick={handleCancel} variant="secondary">Huỷ</Button>
                  <Button onClick={handleOk} variant="primary">Đồng ý</Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )
      }
    </>
  )
};