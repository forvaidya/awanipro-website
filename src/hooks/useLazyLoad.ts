import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for lazy loading images using Intersection Observer API
 * Improves performance by deferring image loads until they're visible
 */
export function useLazyLoad<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once the element is visible
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { elementRef, isVisible };
}
