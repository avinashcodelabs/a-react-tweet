import React from "react";
import "./Message.css";

function Message({ text }) {
  return <div className="message" dangerouslySetInnerHTML={{ __html: text }} />;
}

export { Message };
