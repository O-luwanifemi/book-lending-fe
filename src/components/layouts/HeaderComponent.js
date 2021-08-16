import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const path = window.location.pathname;
const title = path.split('/')[1];
const page = { title };

const HeaderComponent = () => {
    return (
        <Container id="hero">
            
        <nav className="navbar navbar-dark navbar-expand-md mx-5">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">BLA</a>
            <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/books">Books</a></li>

                    
                    {!localStorage.token ? (
                        <>
                            <li className="nav-item"><a className="nav-link active" href="/login">Login</a></li>
                            <li className="nav-item"><a className="nav-link" href="/register">Register</a></li>
                        </>
                        ) : (
                        <>
                            <li className="nav-item dropdown">
                              <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>💁🏻‍♂️ User</span>
                              </span>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/profile">👤 Profile</a></li>
                                <li><a className="dropdown-item" href="/dashboard">🧭 Dashboard</a></li>
                                <li><a className="dropdown-item" href="/shelf">📚 Book Shelf</a></li>
                                <li><a className="dropdown-item" href="/history">🧐 Book History</a></li>
                                <li><a className="dropdown-item" href="/favorites">🤍 Favorites</a></li>
                                <li><a className="dropdown-item" href="/wishlist">🛒 Wishlist</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><span className="dropdown-item text-danger">😞 Logout</span></li>
                              </ul>
                            </li>
                        </>
                    )}
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons" id="search-nav">
                        <span className="text-white"><i className="fas fa-search"></i></span>
                    </li>
                    <li className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons" id="wishlist-nav">
                        <span className="text-white"><i className="fas fa-shopping-cart"></i></span>
                    </li>
                    {!!localStorage.token && (
                        <>
                        <li className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons" id="favorites-nav">
                            <span className="text-white"><i className="far fa-heart"></i></span>
                        </li>
                        <li className="nav-item text-center d-flex justify-content-md-center align-items-md-center .nvb-icons" id="user-nav">
                            <span className="text-white"><i className="far fa-user"></i></span>
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
                        <h2 className="brdcrumb-title">{page.title}</h2>
                        <nav className="brdcrumb-content">
                            <a className="brdcrumb_item" href="/">Home</a>
                            <span className="brdcrumb_sep">/</span>
                            <span className="brdcrumb_item brdcrumb_item_2">{page.title}</span>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default HeaderComponent;