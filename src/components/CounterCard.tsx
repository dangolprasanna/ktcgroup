import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CounterCardProps {
  label: string;
  target: number;
  icon?: React.ReactNode;
  suffix?: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ label, target, icon, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || hasAnimated) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasAnimated(true);
        controls.start('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 2400;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [hasAnimated, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
      className="bg-blue-300 rounded-xl shadow p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
    >
      {icon && <div className="mb-4">{icon}</div>}
      <div className="text-4xl font-bold text-khum-primary mb-2">
        {count}
        {suffix && <span className="text-2xl font-semibold">{suffix}</span>}
      </div>
      <div className="text-lg font-medium text-gray-700">{label}</div>
    </motion.div>
  );
};

export default CounterCard;
