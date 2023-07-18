import React, { useEffect, useState } from "react";
import { getPosts } from "../api-services/posts";
import { Post } from "../types/post";
import PostList from "../components/Post/PostList";
import { toast } from "react-toastify";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts()
      .then((res) => {
        if (res.data) {
          setPosts(
            res.data.posts.map((post: any): Post => {
              return {
                ID: post.ID,
                title: post.title,
                content: post.content,
                author: post.author,
                excerpt: post.excerpt,
                featured_image: post.featured_image,
                modified: post.modified,
              };
            })
          );
        }
      })
      .catch((error) => {
        console.error(error);
        toast(error.message);
      });
  }, [setPosts]);

  return (
    <div className="app-container">
      <h1>Home Page</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
