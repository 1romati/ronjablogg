import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ blogs }) => (
  <div>
    {blogs.map((blog) => (
      <BlogPost key={blog.id} blog={blog} />
    ))}
  </div>
);

export default BlogList;
