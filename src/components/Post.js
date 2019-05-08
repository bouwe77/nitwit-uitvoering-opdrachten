import React from "react";

function Post(props) {
  return (
    <div>
      <b>{props.post.username}</b>
      <br /> {props.post.content}
    </div>
  );
}

export default Post;
