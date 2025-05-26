import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Hook to scroll to top when route changes
export function useScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
}

// Utility function to scroll to top with smooth behavior
export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}