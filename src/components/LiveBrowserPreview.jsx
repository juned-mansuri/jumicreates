import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, RefreshCw, MousePointer, Lock } from 'lucide-react';

/**
 * High-performance Live Browser Viewport:
 * - Emulates a real 1280x720 desktop browser viewport scaled down via GPU transform
 * - Renders the actual live running web application
 * - Lazy-mounts via IntersectionObserver for instant page performance
 * - Keeps pointer-events disabled during carousel drag, with one-click "INTERACT" mode
 * - Graceful loading shimmer and auto-detection
 */
export function LiveBrowserPreview({
  url,
  title,
  fallbackImage,
}) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.45);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [hasError, setHasError] = useState(false);

  // 1. Calculate dynamic scale so 1280x720 iframe fits the 16:9 container perfectly
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          setScale(width / 1280);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // 2. Lazy mount iframe only when entering viewport (prevents network/GPU choking)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleReload = (e) => {
    e.stopPropagation();
    setIsLoaded(false);
    setHasError(false);
    const iframe = containerRef.current?.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const toggleInteractive = (e) => {
    e.stopPropagation();
    setIsInteractive((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] bg-neutral-950 overflow-hidden select-none"
    >
      {/* Loading Shimmer / Connecting Pipeline */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 bg-neutral-900/90 backdrop-blur-xs flex flex-col items-center justify-center gap-3">
          <div className="w-7 h-7 border-2 border-brand-lime border-t-transparent rounded-full animate-spin" />
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-300">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span>CONNECTING LIVE INSTANCE...</span>
          </div>
        </div>
      )}

      {/* Error / Fallback State */}
      {hasError && (
        <div className="absolute inset-0 z-10 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
          {fallbackImage ? (
            <img
              src={fallbackImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          ) : null}
          <div className="relative z-10 flex flex-col items-center gap-2 bg-black/80 p-4 rounded-2xl border border-white/10 backdrop-blur-md max-w-xs">
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
              DEPLOYMENT DETECTOR
            </span>
            <p className="text-xs font-semibold text-white">
              Connecting to live domain...
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-3 py-1 rounded-full bg-brand-lime text-brand-black text-[10px] font-mono font-bold uppercase"
            >
              Check URL
            </a>
          </div>
        </div>
      )}

      {/* Real Live Scaled Iframe */}
      {isInView && (
        <iframe
          src={url}
          title={title}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute top-0 left-0 border-0 transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${isInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{
            width: '1280px',
            height: '720px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      )}

      {/* Floating HUD Controls */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-auto">
        {/* Live Instance Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold tracking-wider uppercase hidden xs:inline">LIVE WEB</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80 truncate max-w-[120px] sm:max-w-[180px]">
            {url.replace('https://', '').replace('/', '')}
          </span>
        </div>

        {/* Interactive Mode & Reload Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleInteractive}
            aria-label={isInteractive ? 'Disable live interaction' : 'Enable live interaction'}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all shadow-md ${
              isInteractive
                ? 'bg-brand-lime text-brand-black ring-2 ring-brand-lime/50'
                : 'bg-black/75 hover:bg-black text-white border border-white/20'
            }`}
          >
            {isInteractive ? (
              <>
                <Lock className="w-3 h-3" />
                <span>INTERACTING</span>
              </>
            ) : (
              <>
                <MousePointer className="w-3 h-3 text-brand-lime" />
                <span>INTERACT</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReload}
            aria-label="Reload preview"
            className="w-6 h-6 rounded-full bg-black/75 hover:bg-black text-white/80 hover:text-white border border-white/20 flex items-center justify-center transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} in new tab`}
            className="w-6 h-6 rounded-full bg-black/75 hover:bg-brand-lime hover:text-brand-black text-white border border-white/20 flex items-center justify-center transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
