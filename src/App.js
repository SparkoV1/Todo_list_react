import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import InfoPopup from "./components/InfoPopup";
import { ROUTES } from "./constants";
import { lazy, useEffect } from "react";
import { checkAuth } from "./redux/api/auth.api";
import { OpenRoute, PrivateRoute } from "./utils/Routes";

const MainLayout = lazy(() => import(/* webpackChunkName: "MainLayout" */ "./layouts/MainLayout/MainLayout"));
const LoginLayout = lazy(() => import(/* webpackChunkName: "LoginLayout" */ "./layouts/LoginLayout/LoginLayout"));
const UsersLayout = lazy(() => import(/* webpackChunkName: "LoginLayout" */ "./layouts/UsersLayout/UsersLayout"));

const App = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { isAuth } = useSelector(({ auth }) => auth);

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_KEY)) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  useEffect(() => {
    push(isAuth ? ROUTES.todos : ROUTES.login);
  }, [push, isAuth]);

  return (
    <>
      <Header />

      {/*работает как обычный switch-case, перебирая роуты*/}
      <Switch>
        <OpenRoute exact path={[ROUTES.home, ROUTES.register, ROUTES.login]} component={LoginLayout} />
        <PrivateRoute path={[ROUTES.users, ROUTES.user]} component={UsersLayout} auth={isAuth} />
        <PrivateRoute exact path={ROUTES.todos} component={MainLayout} auth={isAuth} />
        <Redirect to={ROUTES.home} />
      </Switch>
      <InfoPopup />
    </>
  );
};

export default App;
