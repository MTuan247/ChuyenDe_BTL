import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  RiBarChartGroupedLine,
  RiBook3Line,
  RiHome2Line,
  RiLoginBoxLine,
  RiLogoutBoxLine,
  RiRegisteredLine,
} from "react-icons/ri";

import auth from "../../js/auth/auth";
import "../../css/theheader.css";

export default function TheHeader() {
  const user = useSelector((state) => state.userReducer.user);
  // const dispatch = useDispatch();

  const logout = () => {
    auth.logout();
  };

  return (
    <header>
      <Navbar bg="light" variant="light" expand="md">
        <div className="container-xl">
          <Navbar.Brand as={Link} to="/">
            <strong style={{ fontSize: "27px" }}>
              <span class="color-react">R</span>
              <span class="color-dodgerblue">Novel</span>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/">
                  <RiHome2Line /> Trang chủ
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title={
                  <>
                    <RiBook3Line /> Thể loại{" "}
                  </>
                }
              >
                <div className="dropdown-col">
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=1">
                      Tu tiên
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=2">
                      Hệ thống
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=3">
                      Chuyển sinh
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=4">
                      Xuyên không
                    </Nav.Link>
                  </NavDropdown.Item>
                </div>
                <div className="dropdown-col">
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=5">
                      Đam mỹ
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=6">
                      Bách hợp
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=7">
                      Cung đấu
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=8">
                      Ngôn tình
                    </Nav.Link>
                  </NavDropdown.Item>
                </div>

                <div className="dropdown-col">
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=9">
                      Truyện ngắn
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=10">
                      Tiểu thuyết
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre=11">
                      Light novel
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre">
                      <strong>Xem tất cả</strong>
                    </Nav.Link>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    <RiBarChartGroupedLine /> Bảng xếp hạng{" "}
                  </>
                }
              >
                <div className="dropdown-col">
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Ranking/1">
                      Top lượt xem
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Ranking/2">
                      Top yêu thích
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Ranking/3">
                      Top đánh giá
                    </Nav.Link>
                  </NavDropdown.Item>
                </div>
                <div className="dropdown-col">
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Ranking/4">
                      Top theo dõi
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Ranking/5">
                      Top bình luận
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Ranking/6">
                      Top truyện dài
                    </Nav.Link>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              {user ? (
                <Nav.Item>
                  <Nav.Link onClick={logout}>
                    <RiLogoutBoxLine /> Đăng xuất
                  </Nav.Link>
                </Nav.Item>
              ) : (
                <>
                  <NavItem>
                    <Nav.Link as={NavLink} to="/Login">
                      <RiLoginBoxLine /> Đăng nhập
                    </Nav.Link>
                  </NavItem>
                  <NavItem>
                    <Nav.Link as={NavLink} to="/Signup">
                      <RiRegisteredLine /> Đăng ký
                    </Nav.Link>
                  </NavItem>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
