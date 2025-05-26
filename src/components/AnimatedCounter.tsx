import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // in ms
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 2000, suffix = '', className }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let frame: number;

    function animate() {
      let start = 0;
      const increment = target / (duration / 16); // regular increment
      const lastTwoSeconds = duration - 2000; // time to slow down
      const startTime = Date.now();

      function step() {
        const elapsedTime = Date.now() - startTime;
        let currentIncrement = increment;

        // Adjust the increment for the last 2 seconds of animation
        if (elapsedTime > lastTwoSeconds) {
          const easingFactor = Math.max(1 - (elapsedTime - lastTwoSeconds) / 2000, 0.1);
          currentIncrement *= easingFactor; // slow down as it nears the end
        }

        start += currentIncrement;

        if (start < target) {
          setCount(Math.floor(start));
          frame = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      }
      
      step();
    }

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
