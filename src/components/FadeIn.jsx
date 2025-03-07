import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Comienza invisible y más abajo
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Aparece cuando es visible
      transition={{ duration: 2, delay }} // Suaviza la transición
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
