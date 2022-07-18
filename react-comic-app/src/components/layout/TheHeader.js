import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  RiBarChartGroupedLine,
  RiBook3Line,
  RiHome2Line,
  RiUserLine,
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
              <span className="color-react">R</span>
              <span className="color-dodgerblue">Novel</span>
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
                    <Nav.Link as={NavLink} to="Genre/1/0/0">
                      Huyền huyễn
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre/2/0/0">
                      Tình cảm
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre/3/0/0">
                      Phiêu lưu
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre/4/0/0">
                      Hành động
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre/0/0/0">
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
                    <Nav.Link as={NavLink} to="Genre/0/0/0">
                      Truyện mới nhất
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre/0/1/0">
                      Top lượt xem
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre/0/2/0">
                      Top yêu thích
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={NavLink} to="Genre/0/4/0">
                      Top yêu thích
                    </Nav.Link>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <NavDropdown
                title={
                  <>
                    <RiUserLine /> Tài khoản{" "}
                  </>
                }
                id="user-dropdown"
              >
                {user ? (
                  <NavDropdown.Item>
                    <Nav.Link onClick={logout}>
                      <RiLogoutBoxLine /> Đăng xuất
                    </Nav.Link>
                  </NavDropdown.Item>
                ) : (
                  <>
                    <NavDropdown.Item>
                      <Nav.Link as={NavLink} to="/Login">
                        <RiLoginBoxLine /> Đăng nhập
                      </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Nav.Link as={NavLink} to="/Signup">
                        <RiRegisteredLine /> Đăng ký
                      </Nav.Link>
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
