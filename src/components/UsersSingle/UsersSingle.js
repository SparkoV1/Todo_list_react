import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { clearUserData } from "../../redux/actions/users.actions";
import { getUserPosts, getUsers, getUserTodos } from "../../redux/api/users.api";
import "./UsersSingle.scss";
import Skeleton from "../Skeleton/Skeleton";

const UsersSingle = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { users, loading, todos, posts, todosLoading, postsLoading } = useSelector(({ users }) => users);

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    dispatch(getUserTodos(userId));
    dispatch(getUserPosts(userId));

    if (!users.length) {
      dispatch(getUsers());
    }

    return () => {
      dispatch(clearUserData());
    };
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (users) {
      setCurrentUser(users.find((user) => user.id === +userId));
    }
  }, [users]); // eslint-disable-line react-hooks/exhaustive-deps

  if (todosLoading || postsLoading || loading || (!todos.length && !posts.length)) {
    return (
      <>
        <Skeleton height={90} />
        <Skeleton height={90} />
      </>
    );
  }

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>{currentUser?.name} todos</Typography>
        </AccordionSummary>
        {todos.slice(0, 3).map((todo) => (
          <AccordionDetails key={todo.id} style={{ alignItems: "center" }}>
            <Checkbox checked={todo.completed} disabled />
            <Typography>{todo.title}</Typography>
          </AccordionDetails>
        ))}
        {todos.length > 3 ? (
          <Button component={Link} to={`${pathname}/todos`} fullWidth>
            Show more
          </Button>
        ) : null}
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>{currentUser?.name} posts</Typography>
        </AccordionSummary>
        {posts.slice(0, 3).map((post, i) => (
          <AccordionDetails key={post.id}>
            <Typography>
              {i + 1}. {post.title}
            </Typography>
          </AccordionDetails>
        ))}
        {posts.length > 3 ? (
          <Button component={Link} to={`${pathname}/posts`} fullWidth>
            Show more
          </Button>
        ) : null}
      </Accordion>
    </>
  );
};
export default UsersSingle;
