import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ from = 0, to = 100, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      animate(count, to, { duration });
    }
  }, [isVisible, count, to, duration]);

  return <motion.span className="text-white text-5xl" ref={ref}>{rounded}</motion.span>;
}

export default AnimatedCounter;
