import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { getUsers } from "../../redux/api/users.api";
import Skeleton from "../Skeleton/Skeleton";
import "./UsersList.scss";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(({ users }) => users);

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <>
        <Skeleton height={30} />
        <Skeleton height={30} />
        <Skeleton height={30} />
      </>
    );
  }

  return (
    <div className="users">
      {users.map((user) => (
        <Button component={Link} to={`${ROUTES.users}/${user.id}`} className="users__item" key={user.id}>
          {user.name}
        </Button>
      ))}
    </div>
  );
};

export default UsersList;
