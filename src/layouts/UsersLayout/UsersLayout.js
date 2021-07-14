import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import "./UsersLayout.scss";
import { Route, useHistory } from "react-router";
import { Switch } from "react-router-dom";
import UsersList from "../../components/UsersList/UsersList";
import UsersPosts from "../../components/UsersPosts/UsersPosts";
import UsersSingle from "../../components/UsersSingle/UsersSingle";
import { ROUTES } from "../../constants";

const UsersLayout = () => {
  const { goBack } = useHistory();

  return (
    <div className="users-page">
      <div className="container">
        <Button
          onClick={goBack}
          startIcon={<ArrowBack />}
          variant="outlined"
          color="primary"
          className="users-page__back-btn"
        >
          Back
        </Button>
        <Switch>
          <Route exact path={ROUTES.users}>
            <UsersList />
          </Route>

          <Route exact path={ROUTES.user}>
            <UsersSingle />
          </Route>

          <Route exact path={ROUTES.posts}>
            <UsersPosts />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default UsersLayout;
