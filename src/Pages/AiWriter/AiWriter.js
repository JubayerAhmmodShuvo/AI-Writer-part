import React from "react";
import { Link } from "react-router-dom";
const AiWriter = () => {
  return (
    <div>
      <Link to="home" class="btn btn-primary  py-3 ">
        Home
      </Link>
      <Link to="blog" class="btn btn-primary  py-3 ">
        Blog
      </Link>
      <Link to="editor" class="btn btn-primary py-3">
        Editor
      </Link>
    </div>
  );
};

export default AiWriter;
