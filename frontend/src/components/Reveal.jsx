import React from "react";
import useInViewOnce from "../hooks/useInViewOnce";

export default function Reveal({ as: Comp = "div", className = "", children }) {
  const { ref, inView } = useInViewOnce({ threshold: 0.15 });
  const classes = ["reveal", inView ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return React.createElement(Comp, { ref, className: classes }, children);
}
