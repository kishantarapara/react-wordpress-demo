import React, { useState } from "react";
import { toast } from "react-toastify";

import Styles from "./style.module.css";
import Button from "../Common/Button/Button";
import { createPost } from "../../api-services/posts";

const CreatePostFrom = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <div>
      <div className={Styles["top-bar"]}>
        <div>Create New Post</div>
        <Button
          onClick={() => {
            createPost({ title, content })
              .then((res) => {
                if (res.status === 201) {
                  toast.success("Post created successfully.");
                }
              })
              .catch((error) => {
                console.log("error", error);
                toast.error(error.message);
              });
          }}
        >
          Save
        </Button>
      </div>
      <div className={`${Styles["create-post-editor"]}`}>
        <div>
          <input
            type="text"
            className={`${Styles["create-post-title-editor"]} ${Styles["create-post-editor"]}`}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Title"
          />
        </div>
        <div>
          <textarea
            className={`${Styles["create-post-content-editor"]} ${Styles["create-post-editor"]}`}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add Post Content"
            rows={19}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePostFrom;
