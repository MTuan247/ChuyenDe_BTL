import React, { useEffect, useRef, useState } from "react";
import AdminNovelBox from "../reuse-component/AdminNovelBox";
import SearchBar from "../reuse-component/SearchBar";
import "../../css/screen/admin.css"
import { PromiseRequest } from "../../utils";
import Modal from '../popup/Modal';
import AdminNovelDetail from "../popup/AdminNovelDetail";

import Pagination from '../base-component/Pagination';
import AdminChapterList from "../popup/AdminChapterList";

export default function Admin() {

  const [searchQuery, setSearchQuery] = useState("");

  const defaultModel = {
    "Chapters": null,
    "ComicId": null,
    "ComicCode": null,
    "ComicName": null,
    "Like": 0,
    "Subcribe": 0,
    "Chapter": 0,
    "Status": 0,
    "Thumbnail": null,
    "Description": null,
    "CreatedDate": null,
    "ModifiedDate": null
  }

  const [novelList, setNovelList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();
  const [model, setModel] = useState({...defaultModel});
  const [modalTitle, setModalTitle] = useState("");
  const [mode, setMode] = useState("view");

  const [showPopup, setShowPopup] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);

  const load = (param) => {
    let url = PromiseRequest.getServiceUrl("Comics", "Comic");
    PromiseRequest.send(url, {
      comicSearch: param?.searchQuery || searchQuery,
      pageNumber: param?.searchNumber || pageNumber,
      pageSize: param?.pageSize || pageSize,
      sortOrder: 2,
    }, { method: "get" }).then(res => {
      setNovelList(res.data.Data);
      setTotalPage(res.data.TotalPage);
      setTotalRecord(res.data.TotalRecord);
    })
  }

  useEffect(() => {
    load();
  }, [pageNumber, pageSize])

  let searchTimeout = useRef(null);

  const changeSearch = (e) => {
    setSearchQuery(e.target.value);
    clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(() => {
      load(
        {
          searchQuery: e.target.value,
          pageNumber: 1,
        }
      );
    }, 1000);
  }

  const clickItem = (model) => {
    setShowPopup(true);
    setModel(model);
    setMode("update");
    setModalTitle(model.ComicName);
  }

  const deleteItem = (model) => {
    let url = PromiseRequest.getServiceUrl("", "Comic");
    PromiseRequest.send(url, model, { 
      method: 'delete'
    }).then(() => {
      load();
    });
  }

  const add = () => {
    setShowPopup(true);
    setModel({...defaultModel});
    setMode("add");
    setModalTitle(null);
  }

  const updateValue = (field, value) => {
    setModel({
      ...model,
      [field]: value,
    });
  }

  const handleSave = async () => {
    let url = PromiseRequest.getServiceUrl("", "Comic");
    PromiseRequest.send(url, model, { 
      method: mode === 'update' ? 'put' : 'post'
    }).then(() => {
      load();
    });
  }

  const showChapterListPopup = (model) => {
    setModel(model);
    setShowChapterList(true);
    setModalTitle(model.ComicName);
  }

  return (
    <div className="container-xl admin-screen">
      <SearchBar value={searchQuery} onChange={changeSearch} />
      <div className="body-container">
        <AdminNovelBox chapterList={showChapterListPopup} deleteItem={deleteItem} add={add} clickItem={clickItem} name="Danh sách truyện" list={novelList} />
        <Pagination pageNumber={pageNumber} totalPage={totalPage} onChange={(page) => setPageNumber(page)} />
        <Modal modalTitle={modalTitle || 'Thêm mới'} save={handleSave} close={() => setShowPopup(false)} isShow={showPopup}>
          {
            showPopup ? (
              <AdminNovelDetail update={updateValue} model={model} />
            ) : (
              <></>
            )
          }
        </Modal>
        <Modal modalTitle={modalTitle} close={() => setShowChapterList(false)} isShow={showChapterList}>
          {
            showChapterList ? (
              <AdminChapterList model={model} />
            ) : (
              <></>
            )
          }
        </Modal>
      </div>
    </div>
  );
}
