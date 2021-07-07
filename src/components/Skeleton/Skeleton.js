import React from "react";
import "./Skeleton.scss";

const Skeleton = ({ height }) => {
  return <div className="skeleton" style={height ? { height } : {}} />;
};

export default Skeleton;
