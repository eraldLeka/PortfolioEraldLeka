import React, { useEffect, useRef, useState } from "react";

function useInView(ref, { rootMargin = "200px", threshold = 0.01 } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, inView, rootMargin, threshold]);

  return inView;
}

export default function LazyVideo({
  src,
  sources,
  type = "video/mp4",
  poster,
  className,
  preload = "none",
  autoPlay,
  loop,
  muted,
  playsInline,
  controls,
  rootMargin,
  threshold,
  children,
  ...rest
}) {
  const videoRef = useRef(null);
  const inView = useInView(videoRef, { rootMargin, threshold });
  const [shouldLoad, setShouldLoad] = useState(false);
  const resolvedSources = Array.isArray(sources) && sources.length
    ? sources
    : src
      ? [{ src, type }]
      : [];

  useEffect(() => {
    if (inView) setShouldLoad(true);
  }, [inView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    // Ensure newly attached sources are loaded before attempting playback.
    video.load?.();

    if (!autoPlay) return;

    const handleCanPlay = () => {
      video.play?.().catch(() => {});
    };

    video.addEventListener("canplay", handleCanPlay);
    video.play?.().catch(() => {});

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [shouldLoad, autoPlay, src, type, sources]);

  return (
    <video
      ref={videoRef}
      className={className}
      preload={preload}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      {...rest}
    >
      {shouldLoad
        ? resolvedSources.map((source, index) => (
            <source
              key={`${source.src}-${index}`}
              src={source.src}
              type={source.type || type}
            />
          ))
        : null}
      {children}
    </video>
  );
}
