import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { RiSearchLine, RiArrowRightLine } from "react-icons/ri";
import "../../css/thesearchbar.css";

export default function TheSearchBar() {
  return (
    <div id="search-field">
      <InputGroup className="mb-3 container" id="search-bar">
        <InputGroup.Text id="search-icon">
          <RiSearchLine />
        </InputGroup.Text>
        <FormControl placeholder="Nhập tên truyện bạn muốn tìm . . ." id="search-form" />
        <Button variant="primary" id="search-btn">
          <RiArrowRightLine />
        </Button>
      </InputGroup>
    </div>
  );
}
