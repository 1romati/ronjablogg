import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogList from "../components/BlogList";

const Home = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
