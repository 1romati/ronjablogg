import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { UserContext } from "../context/UserContext";

const CommentSection = ({ blogId }) => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const addComment = () => {
    const newComment = { username: user.name, text: comment };
    const updatedBlogs = blogs.map((blog) =>
      blog.id === blogId
        ? { ...blog, comments: [...(blog.comments || []), newComment] }
        : blog
    );
    setBlogs(updatedBlogs);
    setComment("");
  };

  const blog = blogs.find((blog) => blog.id === blogId);
  const comments = blog.comments || [];

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((c, index) => (
        <div key={index}>
          <p>
            {c.username}: {c.text}
          </p>
        </div>
      ))}
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default CommentSection;
