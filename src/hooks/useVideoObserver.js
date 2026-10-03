import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to control video playback based on intersection visibility
 * and user interactions.
 */
export function useVideoObserver(videoSrc) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !userPausedRef.current) {
            video.play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Autoplay policy or video not ready
                setIsPlaying(false);
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoSrc]);

  const togglePlay = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      video.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      userPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsPlaying(false);
  };

  return {
    videoRef,
    isPlaying,
    isMuted,
    hasError,
    togglePlay,
    toggleMute,
    handleVideoError
  };
}
