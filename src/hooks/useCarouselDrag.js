import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * High-performance hook for ultra-smooth carousel scrolling:
 * - Fluid continuous infinite auto-rotation (right-to-left)
 * - Window-level pointer tracking (no dropping when dragging fast across the screen)
 * - Momentum & velocity inertia on release for buttery flick physics
 * - Seamless half-width infinite wrap
 * - Instant 1:1 responsive drag without scroll-smooth latency
 */
export function useCarouselDrag({
  autoRotate = false,
  infinite = false,
  speed = 1.9, // Slightly reduced, elegant and fluid pace
  pauseOnHover = true,
} = {}) {
  const scrollRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const animFrameIdRef = useRef(null);
  const inertiaFrameIdRef = useRef(null);
  const lastTimeRef = useRef(null);
  const velocityRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  // Update button states on scroll and resize
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  // Seamless Wrap Helper (only active when infinite mode is enabled)
  const checkInfiniteWrap = useCallback(() => {
    if (!infinite) return;
    const el = scrollRef.current;
    if (!el) return;
    const halfWidth = el.scrollWidth / 2;
    if (halfWidth > 0) {
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += halfWidth;
      }
    }
  }, [infinite]);

  // Continuous infinite auto-rotation ticker (right to left)
  useEffect(() => {
    if (!autoRotate || !isAutoRotating) return;

    const tick = (currentTime) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      const el = scrollRef.current;
      if (
        el &&
        !isDraggingRef.current &&
        (!pauseOnHover || !isHoveredRef.current)
      ) {
        // Fast, frame-rate normalized movement
        const step = speed * 60 * Math.min(deltaTime, 0.1);
        el.scrollLeft += step;
        checkInfiniteWrap();
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [autoRotate, isAutoRotating, speed, pauseOnHover, checkInfiniteWrap]);

  // Momentum inertia coasting animation after release
  const startInertia = useCallback(() => {
    if (Math.abs(velocityRef.current) < 0.1) return;

    let currentVelocity = velocityRef.current;
    const friction = 0.94; // Smooth gradual deceleration

    const stepInertia = () => {
      const el = scrollRef.current;
      if (!el || isDraggingRef.current) return;

      currentVelocity *= friction;
      el.scrollLeft -= currentVelocity * 16; // Project frame distance
      checkInfiniteWrap();

      if (Math.abs(currentVelocity) > 0.05) {
        inertiaFrameIdRef.current = requestAnimationFrame(stepInertia);
      } else {
        velocityRef.current = 0;
      }
    };

    if (inertiaFrameIdRef.current) {
      cancelAnimationFrame(inertiaFrameIdRef.current);
    }
    inertiaFrameIdRef.current = requestAnimationFrame(stepInertia);
  }, [checkInfiniteWrap]);

  // Pointer Down (Mouse or Touch)
  const onPointerDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;

    // Stop any active inertia or animation
    if (inertiaFrameIdRef.current) {
      cancelAnimationFrame(inertiaFrameIdRef.current);
    }

    isDraggingRef.current = true;
    setIsDraggingState(true);
    isHoveredRef.current = true;

    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    startXRef.current = clientX;
    scrollLeftStartRef.current = el.scrollLeft;
    lastPointerXRef.current = clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;

    // Window level listeners ensure dragging never drops even if cursor moves fast across viewport
    const handlePointerMove = (moveEvent) => {
      if (!isDraggingRef.current) return;
      const currentClientX = moveEvent.clientX ?? moveEvent.touches?.[0]?.clientX ?? 0;
      const now = performance.now();
      const deltaX = currentClientX - startXRef.current;

      // 1:1 crisp responsive drag
      el.scrollLeft = scrollLeftStartRef.current - deltaX;
      checkInfiniteWrap();

      // Calculate instantaneous velocity for inertia
      const timeDiff = now - lastPointerTimeRef.current;
      if (timeDiff > 10) {
        velocityRef.current = (currentClientX - lastPointerXRef.current) / timeDiff;
        lastPointerXRef.current = currentClientX;
        lastPointerTimeRef.current = now;
      }
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      setIsDraggingState(false);

      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);

      // Trigger smooth momentum coasting
      startInertia();

      // Resume auto-rotation after 1s delay
      setTimeout(() => {
        isHoveredRef.current = false;
      }, 1000);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointercancel', handlePointerUp, { passive: true });
  };

  const onMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const onMouseLeave = () => {
    if (!isDraggingRef.current) {
      isHoveredRef.current = false;
    }
  };

  // Wheel handling for smooth trackpad horizontal swipe
  const onWheel = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      el.scrollLeft += e.deltaX;
      checkInfiniteWrap();
    }
  };

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.firstElementChild?.clientWidth || 320;
    const scrollOffset = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    el.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating((prev) => !prev);
  };

  return {
    scrollRef,
    isDragging: isDraggingState,
    isAutoRotating,
    toggleAutoRotate,
    canScrollLeft,
    canScrollRight,
    scrollLeft: () => scrollByAmount('left'),
    scrollRight: () => scrollByAmount('right'),
    dragHandlers: {
      onPointerDown,
      onMouseEnter,
      onMouseLeave,
      onWheel,
    },
  };
}

