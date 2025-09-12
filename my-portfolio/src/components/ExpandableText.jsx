import React, { useState } from "react";
import "../styles/ExpandableText.css";
const ExpandableText = ({ text, maxLength = 150 }) => {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {expanded ? text : text.substring(0, maxLength) + "... "}
      <button
        className="see-more-button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "See less" : "See more"}
      </button>
    </p>
  );
};

export default ExpandableText;
