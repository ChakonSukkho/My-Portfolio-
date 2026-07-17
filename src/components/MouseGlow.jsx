import { useEffect, useRef } from 'react';

function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const canTrack = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!glow || !canTrack || reduceMotion) return undefined;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animationFrame;

    const moveGlow = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      animationFrame = requestAnimationFrame(moveGlow);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.dataset.active = 'true';
    };

    const handlePointerLeave = () => {
      glow.dataset.active = 'false';
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);
    animationFrame = requestAnimationFrame(moveGlow);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />;
}

export default MouseGlow;
