import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./commentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="kohli" />
      <CommentDetail author="Sachin" />
      <CommentDetail author="Dravid" />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
