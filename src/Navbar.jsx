import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "./userslice";

function Navbar() {
  var { isLoggedIn, username } = useSelector((state) => state.userR);
  var c = useSelector((state) => state.userR);
  var navigate = useNavigate();
  var dispatch = useDispatch();
  console.log(c);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            FAANG
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link" aria-current="page" to="/">
                Home
              </Link>
              {isLoggedIn && (
                <>
                  <Link class="nav-link" aria-current="page" to="/">
                    <b>Welcome {username}</b>
                  </Link>
                  <Link class="nav-link" aria-current="page" to="/products">
                    Products
                  </Link>
                  <Link class="nav-link" aria-current="page" to="/employees">
                    Employees
                  </Link>
                  <Link class="nav-link" aria-current="page" to="/todos">
                    Todos
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
              {!isLoggedIn && (
                <Link class="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
