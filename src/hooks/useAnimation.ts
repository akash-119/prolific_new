import { useState, useEffect, useCallback } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, isScrolled };
}

export function useCountUp(end: number, duration: number = 2000, isDecimal: boolean = false) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const startCounting = useCallback(() => {
    if (!isInView) return;
    
    const startTime = Date.now();
    const step = isDecimal ? 0.1 : 1;
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = isDecimal 
        ? Math.round(easeOut * end * 10) / 10
        : Math.floor(easeOut * end);
      
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView, isDecimal]);

  useEffect(() => {
    startCounting();
  }, [startCounting]);

  return { count, setIsInView };
}
