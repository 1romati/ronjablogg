import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import { BlogProvider } from "./context/BlogContext";
import Home from "./pages/Home";
import MyPosts from "./pages/MyPosts";
import Navbar from "./components/Navbar";

const App = () => (
  <UserProvider>
    <BlogProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myposts" element={<MyPosts />} />
        </Routes>
      </Router>
    </BlogProvider>
  </UserProvider>
);

export default App;
