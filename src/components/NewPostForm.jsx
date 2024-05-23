import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { UserContext } from "../context/UserContext";

const NewPostForm = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: blogs.length + 1,
      title,
      author: user.name,
      text,
      comments: [],
    };
    setBlogs([...blogs, newPost]);
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default NewPostForm;
