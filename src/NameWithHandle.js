import React from "react";
import "./NameWithHandle.css";

function NameWithHandle({ author }) {
  const { handle, name } = author;
  return (
    <span className="name-with-handle">
      <div className="name">{name}</div>
      <div className="handle">{handle}</div>
    </span>
  );
}

export { NameWithHandle };
