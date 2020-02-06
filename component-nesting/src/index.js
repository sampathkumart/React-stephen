import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./commentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
