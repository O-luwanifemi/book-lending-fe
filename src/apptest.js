import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { logoutAsync } from "../../redux/actions/loginAction";

const HeaderComponent = ({ title }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  return (
    <Container id="hero" style={{ minWidth: "100%" }}>
      <nav className="navbar navbar-dark navbar-expand-md mx-5">
        <div className="container-fluid">
          <Link to="/books" className="navbar-brand">
            BLA
          </Link>

          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/books" className="nav-link">
                  Home
                </Link>
              </li>

              {!localStorage.token ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>💁🏻‍♂️ User</span>
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          👤 Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard" className="dropdown-item">
                          🧭 Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/shelf" className="dropdown-item">
                          📚 Book Shelf
                        </Link>
                      </li>
                      <li>
                        <Link to="/history" className="dropdown-item">
                          🧐 Book History
                        </Link>
                      </li>
                      <li>
                        <Link to="/favorites" className="dropdown-item">
                          🤍 Favorites
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist" className="dropdown-item">
                          🛒 Wishlist
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li onClick={handleLogout}>
                        <span className="dropdown-item text-danger">
                          😞 Logout
                        </span>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>

            <ul className="navbar-nav">
              <li
                className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons"
                id="search-nav"
              >
                <span className="text-white">
                  <i className="fas fa-search"></i>
                </span>
              </li>
              <li
                className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons"
                id="wishlist-nav"
              >
                <span className="text-white">
                  <i className="fas fa-shopping-cart"></i>
                </span>
              </li>
              {!!localStorage.token && (
                <>
                  <li
                    className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons"
                    id="favorites-nav"
                  >
                    <span className="text-white">
                      <i className="far fa-heart"></i>
                    </span>
                  </li>
                  <li
                    className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons"
                    id="user-nav"
                  >
                    <span className="text-white">
                      <i className="far fa-user"></i>
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Container className="h-100 text-center d-flex justify-content-center align-items-center align-content-center">
        <Row>
          <Col>
            <h2 className="brdcrumb-title">{title}</h2>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HeaderComponent;


      
        // <Container fluid id="hero">
        // <Navbar className="navbar-dark navbar-expand-md mx-5 text-white border-bottom">
        //     <Container fluid>
        //         <Navbar.Brand href="/" className='header'>BookLendingApp</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mx-auto d -none d -sm-block">
        //             <Nav.Link href="/">Home</Nav.Link>
        //             <Nav.Link href="/books">Books</Nav.Link>
        //             <Nav.Link href="/login">Login</Nav.Link>
        //             <Nav.Link href="/register">Register</Nav.Link>

        //             <NavDropdown title="💁🏻‍♂️ User" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="/profile">👤 Profile</NavDropdown.Item>
        //                 <NavDropdown.Item href="/dashboard">🧭 Dashboard</NavDropdown.Item>
        //                 <NavDropdown.Item href="/shelf">📚 Book Shelf</NavDropdown.Item>
        //                 <NavDropdown.Item href="/history">🧐 Book History</NavDropdown.Item>
        //                 <NavDropdown.Item href="/favorites">🤍 Favorites</NavDropdown.Item>
        //                 <NavDropdown.Item href="/wishlist">🛒 Wishlist</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item className="text-danger">😞 Logout</NavDropdown.Item>
        //             </NavDropdown>
                    
        //         </Nav>
        //         <Nav className="font-weight-bold" id="icon-link">
        //             <Nav.Item className="nav-item"><span><i className="fas fa-search"></i></span></Nav.Item>
        //             <Nav.Item className="nav-item"><span><i className="far fa-heart"></i></span></Nav.Item>
        //             <Nav.Item className="nav-item"><span><i className="fas fa-shopping-cart"></i></span></Nav.Item>
                    
        //             <Nav.Item className="nav-item"><span><i className="far fa-user"></i></span></Nav.Item>
        //         </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        //     </Navbar>
        //     <Container className="h-100 text-center d-flex justify-content-center align-items-center align-content-center">
        //         <Row>
        //             <Col>
        //                 <h2 className="brdcrumb-title">{page.title}</h2>
        //                 <nav className="brdcrumb-content">
        //                     <a className="brdcrumb_item" href="/">Home</a>
        //                     <span className="brdcrumb_sep">/</span>
        //                     <span className="brdcrumb_item brdcrumb_item_2">{page.title}</span>
        //                 </nav>
        //             </Col>
        //         </Row>
        //     </Container>
        // </Container>
        
