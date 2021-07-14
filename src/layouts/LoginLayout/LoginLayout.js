import { Link } from "@material-ui/core";
import React, { lazy } from "react";
import { useLocation } from "react-router";
import { Link as RouterLink, Switch } from "react-router-dom";
import { ROUTES } from "../../constants";
import { OpenRoute } from "../../utils/Routes";
import "./LoginLayout.scss";

const LoginLayout = () => {
  const RegisterForm = lazy(() => import(/* webpackChunkName: "RegisterForm" */ "./RegisterForm/RegisterForm"));
  const LoginForm = lazy(() => import(/* webpackChunkName: "LoginForm" */ "./LoginForm/LoginForm"));

  const { pathname } = useLocation();

  return (
    <div className="login-page">
      <div className="login-page__switch-form">
        <Switch>
          <OpenRoute exact path={ROUTES.register} component={RegisterForm} />
          <OpenRoute exact path={ROUTES.login} component={LoginForm} />
        </Switch>
        {pathname.includes("login") ? (
          <p className="login-page__switcher">
            Do not have an account?{" "}
            <Link component={RouterLink} to={ROUTES.register}>
              Register
            </Link>
          </p>
        ) : pathname.includes("register") ? (
          <p className="login-page__switcher">
            Already registered?{" "}
            <Link component={RouterLink} to={ROUTES.login}>
              Login
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default LoginLayout;
