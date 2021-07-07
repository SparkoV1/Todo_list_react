import React from "react";
import UsersList from "../../components/UsersList/UsersList";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../../constants";
import UsersSingle from "../../components/UsersSingle/UsersSingle";
import { Button } from "@material-ui/core";
import "./UsersLayout.scss";
import { useHistory } from "react-router";

const UsersLayout = () => {
  const { goBack } = useHistory();

  return (
    <div className="container">
      <Button className="users-layout__btn" onClick={() => goBack()} variant="contained" color="primary">
        Back
      </Button>
      <Switch>
        <Route exact path={ROUTES.users}>
          <UsersList />
        </Route>

        <Route exact path={ROUTES.singleUser}>
          <UsersSingle />
        </Route>
      </Switch>
    </div>
  );
};

export default UsersLayout;
