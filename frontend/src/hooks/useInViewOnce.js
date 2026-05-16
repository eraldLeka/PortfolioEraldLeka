import { useEffect, useRef, useState } from "react";

export default function useInViewOnce(options = {}) {
  const { threshold = 0.15, root = null, rootMargin = "0px" } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, root, rootMargin, threshold]);

  return { ref, inView };
}

