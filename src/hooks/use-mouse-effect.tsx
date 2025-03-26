
import { useEffect } from 'react';

export function useMouseEffect() {
  useEffect(() => {
    // Create cursor element if it doesn't exist
    let cursor = document.querySelector('.mouse-cursor') as HTMLElement;
    
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.classList.add('mouse-cursor');
      document.body.appendChild(cursor);
    }
    
    // Initialize cursor styles
    cursor.style.position = 'fixed';
    cursor.style.width = '80px';
    cursor.style.height = '80px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid var(--purple)';
    cursor.style.opacity = '0';
    cursor.style.zIndex = '9999';
    cursor.style.pointerEvents = 'none';
    
    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      cursor.style.opacity = '1';
      cursor.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
    };
    
    const onMouseLeave = () => {
      cursor.style.opacity = '0';
    };
    
    const onMouseEnter = () => {
      cursor.style.opacity = '1';
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      
      // Optional: Remove the cursor element on cleanup
      // if (cursor && cursor.parentNode) {
      //   cursor.parentNode.removeChild(cursor);
      // }
    };
  }, []);
}
