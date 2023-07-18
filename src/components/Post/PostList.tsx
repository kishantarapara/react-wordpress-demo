import React from "react";

import { Post } from "../../types/post";
import PostCard from "./PostCard";

import Styles from "./style.module.css";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={Styles["post-list"]}>
      {posts.map((post) => (
        <PostCard key={post.ID} post={post} />
      ))}
    </div>
  );
};

export default PostList;
