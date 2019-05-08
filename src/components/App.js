import React, { useState } from "react";

import Header from "./Header";
import Timeline from "./Timeline";
import Compose from "./Compose";

function App() {
  const initialPosts = [
    { username: "Bouwe", content: "Hello World" },
    { username: "Bouwe", content: "My second tweet :)" }
  ];

  const [posts, setPosts] = useState(initialPosts);

  function addPost(content) {
    var updatedPosts = [...posts, { username: "Bouwe", content }];
    setPosts(updatedPosts);
  }

  return (
    <>
      <Header />
      <Compose addPost={addPost} />
      <Timeline posts={posts} />
    </>
  );
}

export default App;
