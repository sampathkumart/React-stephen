import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./commentDetail";
import ApprovalCard from "./approvalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h2>Alert!</h2>
          good evening everybody
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="kohli"
          time="Today at 5.23PM"
          comment="nice"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sachin"
          time="Today at 7.53PM"
          comment="awesome"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Dravid"
          time="Today at 6.44AM"
          comment="super"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
