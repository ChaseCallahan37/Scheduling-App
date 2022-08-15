import React from "react";
import "./ResourceTag.css";

function ResourceTag() {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="tag-container">
          <div className="tag-card">
            <h3 className="tag-title">Jeff</h3>
          </div>
          <div className="tag-card">
            <h3 className="tag-title">Chase</h3>
          </div>
          <div className="tag-card">
            <h3 className="tag-title">Sam</h3>
          </div>
        </div>
      </body>
    </div>
  );
}

export default ResourceTag;
