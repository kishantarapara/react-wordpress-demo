import React from "react";
import { Parser } from "html-to-react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

import { Post } from "../../types/post";
import Button from "../Common/Button/Button";

import Styles from "./style.module.css";
import defaultImg from "../../assets/default-image.png";

interface postCardProps {
  post: Post;
}

const htmlToReactParser = new (Parser as any)();

const PostCard = ({ post }: postCardProps) => {
  const { excerpt, title, featured_image, modified, ID } = post;
  const navigate = useNavigate();

  return (
    <div className={Styles["post-card"]}>
      <div className={Styles["post-card-title"]}>{title}</div>
      <img src={featured_image ? featured_image : defaultImg} alt={title} />
      <div className={Styles["post-card-description"]}>
        {htmlToReactParser.parse(excerpt)}
      </div>
      <div className={Styles["spacer"]}></div>
      <div className={Styles["post-card-footer"]}>
        <Moment fromNow>{modified}</Moment>
        <Button outlined onClick={() => navigate(`/post/${ID}`)}>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
