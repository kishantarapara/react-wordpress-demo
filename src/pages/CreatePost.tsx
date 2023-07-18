import React, { useEffect } from "react";
import CreatePostFrom from "../components/CreatePost/CreatePostForm";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  });

  return (
    <div>
      <CreatePostFrom />
    </div>
  );
};

export default CreatePost;
