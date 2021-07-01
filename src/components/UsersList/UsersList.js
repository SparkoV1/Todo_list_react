import React, { useEffect } from "react";
import { getUsers } from "../../redux/api/users.api";
import { useDispatch, useSelector } from "react-redux";

const UsersList = () => {
  const dispatch = useDispatch();

  const { loading, users } = useSelector(({ users }) => users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (!users || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersList;
