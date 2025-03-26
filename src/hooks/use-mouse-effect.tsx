
import { useEffect, RefObject } from 'react';

export function useMouseEffect(containerRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const cursor = container.querySelector('.mouse-cursor') as HTMLElement;
    if (!cursor) return;
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      cursor.style.opacity = '1';
      cursor.style.transform = `translate(${x - 80}px, ${y - 80}px)`;
    };
    
    const onMouseLeave = () => {
      cursor.style.opacity = '0';
    };
    
    const onMouseEnter = () => {
      cursor.style.opacity = '1';
    };
    
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('mouseenter', onMouseEnter);
    
    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [containerRef]);
}
