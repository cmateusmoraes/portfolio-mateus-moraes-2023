import { useEffect, useState, useRef } from "react";

export function useIsElementInViewport() {
  const [isInViewport, setIsInViewport] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;

      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        setIsInViewport(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [isInViewport, elementRef] as const;
}
