import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { UserContext } from "../context/UserContext";
import BlogList from "../components/BlogList";
import NewPostForm from "../components/NewPostForm";

const MyPosts = () => {
  const { blogs } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const userBlogs = blogs.filter((blog) => blog.author === user.name);

  return (
    <div className="container">
      <h1>My Posts</h1>
      <NewPostForm />
      <BlogList blogs={userBlogs} />
    </div>
  );
};

export default MyPosts;
