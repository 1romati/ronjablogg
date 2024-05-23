import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BlogContext } from "../context/BlogContext";
import CommentSection from "./CommentSection";
import EditPostForm from "./EditPostForm";

const BlogPost = ({ blog }) => {
  const { user } = useContext(UserContext);
  const { blogs, setBlogs } = useContext(BlogContext);
  const [isEditing, setIsEditing] = useState(false);
  const isAuthor = blog.author === user.name;

  const handleDelete = () => {
    const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="blog-post">
      {isEditing ? (
        <EditPostForm blog={blog} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <h2>{blog.title}</h2>
          <p>
            <strong>{blog.author}</strong>
          </p>
          <p>{blog.text}</p>
          {isAuthor && (
            <div className="actions">
              <button className="edit" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
          <CommentSection blogId={blog.id} />
        </>
      )}
    </div>
  );
};

export default BlogPost;
