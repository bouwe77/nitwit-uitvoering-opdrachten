import React, { useState } from "react";

function Compose(props) {
  const [content, setContent] = useState("");

  function changeContent(event) {
    setContent(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    props.addPost(content);
    setContent("");
  }

  return (
    <form onSubmit={submitForm}>
      <textarea value={content} onChange={changeContent} />
      <br />
      <button type="submit">OK</button>
    </form>
  );
}

export default Compose;
