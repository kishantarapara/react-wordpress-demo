import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api-services/posts";
import { Post } from "../types/post";
import PostDetails from "../components/Post/PostDetails";

const PostPage = (props: any) => {
  const { id } = useParams();
  const [postData, setPostData] = useState<Post>();

  useEffect(() => {
    if (id && !postData) {
      getPostById(id).then((res) => {
        console.log(res);
        if (res.data) {
          setPostData({
            title: res.data.title,
            content: res.data.content,
            excerpt: res.data.excerpt,
            featured_image: res.data.featured_image,
            ID: res.data.ID,
            modified: res.data.modified,
            author: res.data.author,
          });
        }
      });
    }
  }, [id, postData]);

  return (
    <div className="app-container">
      {postData ? <PostDetails postData={postData} /> : <div>Loading...</div>}
    </div>
  );
};

export default PostPage;
