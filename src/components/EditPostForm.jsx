import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const EditPostForm = ({ blog, onCancel }) => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [title, setTitle] = useState(blog.title);
  const [text, setText] = useState(blog.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { ...blog, title, text };
    const updatedBlogs = blogs.map((b) => (b.id === blog.id ? updatedBlog : b));
    setBlogs(updatedBlogs);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}></button>
    </form>
  );
};

export default EditPostForm;
