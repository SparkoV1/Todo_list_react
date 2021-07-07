import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { getUserPosts } from "../../redux/api/users.api";
import { useDispatch, useSelector } from "react-redux";
import "./UsersSingle.scss";
import Skeleton from "../Skeleton/Skeleton";
import { clearUserPosts } from "../../redux/actions/users.action";

const UsersSingle = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { posts, postsLoading } = useSelector(({ users }) => users);

  useEffect(() => {
    dispatch(getUserPosts(userId));

    return () => {
      dispatch(clearUserPosts());
    };
  }, [dispatch, userId]);

  if (!posts || postsLoading) {
    return (
      <>
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </>
    );
  }

  return (
    <div className="users-single">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Posts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {posts.map((post) => (
            <div key={post.id} className="users-single__post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Todos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {posts.map((post) => (
            <div key={post.id} className="users-single__post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UsersSingle;
