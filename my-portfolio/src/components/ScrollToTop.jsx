import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    // Timeout siguron që DOM dhe CSS të jenë ngarkuar
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return null;
}

export default ScrollToTop;
