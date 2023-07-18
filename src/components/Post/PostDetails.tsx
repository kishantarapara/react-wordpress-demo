import React from "react";
import Moment from "react-moment";

import { Post } from "../../types/post";

import Styles from "./style.module.css";
import { htmlToReact } from "../../utils";

interface PostDetailsProps {
  postData: Post;
}

const PostDetails = ({ postData }: PostDetailsProps) => {
  const { content, title, modified, author } = postData;
  return (
    <div>
      <div className={Styles["post-detail-title"]}>{title}</div>
      <div className={Styles["post-detail-date-author"]}>
        <Moment format="MMMM, DD YYYY">{modified}</Moment>
        {`, by ${author.name}`}
      </div>
      <div className={Styles["post-details-content"]}>
        {htmlToReact(content)}
      </div>
    </div>
  );
};

export default PostDetails;
