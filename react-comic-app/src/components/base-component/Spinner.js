import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux'
import "../../css/popup/modal.css";

export default function Spinner(props) {

  const loading = useSelector((state) => state.contextReducer.loading);

  return (
    <>
      {
        loading ? (

          <div className="modal-overlay">
            <ClipLoader loading={loading} />
          </div>
        ) : (
          <></>
        )
      }
    </>
  )
};