import React, { useEffect, useRef, useState } from "react";
import AdminNovelBox from "../reuse-component/AdminNovelBox";
import SearchBar from "../reuse-component/SearchBar";
import "../../css/screen/admin.css"
import { PromiseRequest } from "../../utils";
import Modal from '../popup/Modal';
import AdminNovelDetail from "../popup/AdminNovelDetail";

export default function Admin() {

  const [searchQuery, setSearchQuery] = useState("");

  const [novelList, setNovelList] = useState([]);
  const [pageNumber] = useState(1);
  const [pageSize] = useState(20);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();

  const [showPopup, setShowPopup] = useState(false);

  const load = () => {
    let url = PromiseRequest.getServiceUrl("Comics", "Comic");
    PromiseRequest.send(url, {
      comicSearch: searchQuery,
      pageNumber: pageNumber,
      pageSize: pageSize,
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
      load();
    }, 1000);
  }

  const clickItem = () => {
    setShowPopup(true);
  }

  return (
    <div className="container-xl admin-screen">
      <SearchBar value={searchQuery} onChange={changeSearch} />
      <div className="body-container">
        <AdminNovelBox clickItem={clickItem} name="Danh sách truyện" list={novelList} />
        <Modal close={() => setShowPopup(false)} isShow={showPopup}>
          <AdminNovelDetail />
        </Modal>
      </div>
    </div>
  );
}
