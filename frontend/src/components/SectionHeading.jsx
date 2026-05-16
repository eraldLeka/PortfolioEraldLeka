import React from "react";
import "../styles/SectionHeading.css";

export default function SectionHeading({ number, title, as: Comp = "h2" }) {
  return (
    <div className="sectionHeading">
      <span className="sectionHeading__num">{number}</span>
      {React.createElement(Comp, { className: "sectionHeading__title" }, title)}
    </div>
  );
}
