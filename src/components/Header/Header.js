import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./Header.scss";
import { ROUTES } from "../../constants";
import { logout } from "../../redux/api/auth.api";

const Header = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector(({ auth }) => auth);

  function logoutLocal() {
    dispatch(logout());
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__box">
          <Link to={ROUTES.home} className="header__logo">
            <img src={logo} alt="" />
          </Link>

          <nav className="header__nav">
            <NavLink exact to={ROUTES.todos}>
              Todos
            </NavLink>
            <NavLink to={ROUTES.users}>Users</NavLink>
          </nav>

          {isAuth ? (
            <Button onClick={logoutLocal}>Logout</Button>
          ) : (
            <Button component={Link} to={ROUTES.login} variant="contained" color="primary">
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
