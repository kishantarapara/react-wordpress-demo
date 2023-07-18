import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import PostPage from "../../pages/PostPage";
import Navbar from "../Navbar/Navbar";

import CreatePost from "../../pages/CreatePost";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/post/:id" Component={PostPage} />
        <Route path="/create-post" Component={CreatePost} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
