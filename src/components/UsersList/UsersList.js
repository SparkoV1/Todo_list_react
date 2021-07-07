import React, { useEffect } from "react";
import { getUsers } from "../../redux/api/users.api";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../Skeleton/Skeleton";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./UsersList.scss";
import { useLocation } from "react-router";

const UsersList = () => {
  const dispatch = useDispatch();

  const { loading, users } = useSelector(({ users }) => users);

  useEffect(() => {
    if (!users || !users.length) {
      dispatch(getUsers());
    }
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  const { pathname } = useLocation();

  if (!users || loading) {
    return (
      <>
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </>
    );
  }

  return (
    <div className="users-list">
      {users.map((user) => (
        <Button component={Link} to={`${pathname}/${user.id}`} variant="outlined" color="primary" key={user.id}>
          {user.name}
        </Button>
      ))}
    </div>
  );
};

export default UsersList;
