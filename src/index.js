import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { lightGreen, pink } from "@material-ui/core/colors";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

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

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
