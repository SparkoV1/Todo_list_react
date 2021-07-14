import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserPosts } from "../../redux/api/users.api";
import "./UsersPosts.scss";
import Skeleton from "../Skeleton/Skeleton";

const UsersPosts = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const { posts, postsLoading } = useSelector(({ users }) => users);

  useEffect(() => {
    if (!posts.length) {
      dispatch(getUserPosts(userId));
    }
  }, [dispatch, posts]); // eslint-disable-line react-hooks/exhaustive-deps

  if (postsLoading) {
    return <Skeleton height={90} />;
  }

  return (
    <div className="posts">
      {posts.map((post, i) => (
        <div className="posts__post" key={post.id}>
          <div className="posts__title">
            {i + 1}. {post.title}
          </div>
          <div className="posts__text">{post.body}</div>
        </div>
      ))}
    </div>
  );
};
export default UsersPosts;
