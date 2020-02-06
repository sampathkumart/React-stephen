import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Dhoni
          </a>
          <div className="metadata">
            <span className="date">Today at 7.36AM</span>
          </div>
          <div className="text">Awosome post</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
