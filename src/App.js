import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { lightGreen, pink } from "@material-ui/core/colors";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import { ROUTES } from "./constants";
import { lazy } from "react";
import { OpenRoute, PrivateRoute } from "./utils/Routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[400],
      main: lightGreen[500],
      dark: lightGreen[600],
    },
    secondary: {
      light: pink[400],
      main: pink[500],
      dark: pink[600],
    },
  },
});

const MainLayout = lazy(() => import(/* webpackChunkName: "MainLayout" */ "./layouts/MainLayout/MainLayout"));
const LoginLayout = lazy(() => import(/* webpackChunkName: "LoginLayout" */ "./layouts/LoginLayout/LoginLayout"));
const UsersLayout = lazy(() => import(/* webpackChunkName: "LoginLayout" */ "./layouts/UsersLayout/UsersLayout"));

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />

        {/*работает как обычный switch-case, перебирая роуты*/}
        <Switch>
          <OpenRoute exact path={ROUTES.home} component={LoginLayout} />
          <PrivateRoute exact path={ROUTES.todos} component={MainLayout} auth={true} />
          <PrivateRoute exact path={ROUTES.users} component={UsersLayout} auth={true} />
          <Redirect to={ROUTES.home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
