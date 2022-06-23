import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { RiSearchLine, RiArrowRightLine } from "react-icons/ri";
import "../../css/reuse-component/searchbar.css";

export default function SearchBar({
  value = "",
  onChange = () => {},
}) {

  return (
    <div className="search-field">
      <InputGroup className="mb-3 container-xl" id="search-bar">
        <InputGroup.Text id="search-icon">
          <RiSearchLine />
        </InputGroup.Text>
        <FormControl value={value} onChange={onChange} placeholder="Nhập tên truyện bạn muốn tìm . . ." id="search-form" />
        <Button variant="primary" id="search-btn">
          <RiArrowRightLine />
        </Button>
      </InputGroup>
    </div>
  );
}
